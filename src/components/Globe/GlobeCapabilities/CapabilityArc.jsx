import { useFrame } from "@react-three/fiber"
import React, { useCallback, useMemo, useRef, useState } from "react"
import * as THREE from "three"
// import { Vector3 } from "three"
import { Vector3 } from "three/src/math/Vector3.js"
import { useSnapshot } from "valtio"
import { state } from "../../../store"

function getSplineFromCoords(start, end, mid) {
  const m = mid.clone()
  m.x *= 0.5
  return {
    start,
    end,
    spline: new THREE.CubicBezierCurve3(start, m, m, end),
  }
}

export default ({ arcs }) => {
  const markers = useSnapshot(state.capabilityMarkerPositions)
  const ref = useRef()

  let progress = useRef(0)
  const t = useRef(0)
  const arcIndex = useRef(0)
  const [currentArc, setArc] = useState(arcs[0])

  const coords = useMemo(() => {
    const { start, mid, end } = currentArc
    const startOffset = currentArc.startOffset || new Vector3(0)
    const endOffset = currentArc.endOffset || new Vector3(0)
    return {
      start: new THREE.Vector3(...Object.values(markers[start] || {})).add(
        startOffset
      ),
      mid1: mid,
      mid2: mid,
      end: new THREE.Vector3(...Object.values(markers[end] || {})).add(
        endOffset
      ),
    }
  }, [currentArc, markers])

  const points = useMemo(
    () =>
      getSplineFromCoords(
        coords.start,
        coords.end,
        coords.mid1
      ).spline.getPoints(50),
    [coords]
  )

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  )
  const animation = useMemo(() => currentArc.animation || {}, [currentArc])
  const frameCallback = useCallback(
    (_, dt) => {
      progress.current += dt * 0.7 * (animation.speed || 1.2)
      t.current += dt

      if (ref.current) {
        const ark = ref.current
        const r = progress.current
        ark.geometry.setDrawRange(
          Math.floor((r - 0.8) * points.length),
          Math.floor((r + 0.8) * points.length)
        )
      }

      // here we reset the lines after 3s and the animation offset
      if (progress.current >= 1.8 + animation.offset || 0) {
        progress.current = 0
        arcIndex.current =
          arcIndex.current + 1 > arcs.length - 1 ? 0 : arcIndex.current + 1
        setArc(arcs[arcIndex.current])
      }
    },
    [currentArc, arcs, animation, points]
  )

  useFrame(frameCallback)

  return (
    <group>
      <line ref={ref} geometry={geometry}>
        <lineBasicMaterial
          attach="material"
          linewidth={1}
          linecap={"round"}
          linejoin={"round"}
          color="#45b868"
        />
      </line>
      {/* <line ref={refDashed} geometry={geometry.clone()}>
        <lineDashedMaterial
          attach="material" //
          dashSize={0.1}
          gapSize={0.15}
          color="#45b868"
        />
      </line> */}
    </group>
  )
}
