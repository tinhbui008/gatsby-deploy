import { useFrame } from "@react-three/fiber"
import React, { lazy, Suspense, useEffect, useRef, useState } from "react"
import { useSnapshot } from "valtio"
import "../../materials/default-custom"
import { state } from "../../store"
import GlobeGlow from "./GlobeGlow"
import OfficeMarker from "./GlobeOffices/OfficeMarker"
import { useMediaQuery } from "beautiful-react-hooks"
// Globe
export default function Globe({ globalOffice, getPosition }) {
  const isBig = useMediaQuery("(min-width: 1024px)")
  const snap = useSnapshot(state)
  const groupRef = useRef(null)
  const sphereRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const [sphereDistance, setSphereDistance] = useState(0)
  // mounted component state

  const frameCallback = React.useCallback(
    ({ camera }) => {
      // update sphere distance
      setSphereDistance(camera.position.distanceTo(groupRef.current.position))

      //  When a city is exited, then zoom the camera out
      if (snap.zoomOut) {
        camera.position.lerp(
          snap.savedCameraPosition.normalize().multiplyScalar(10),
          0.1
        )
        groupRef.current.rotation.y = 0
      }
      // scale down Global when click to Capability marker
      if (snap.selectedCapability !== null) {
        camera.position.lerp(
          snap.savedCameraPosition.normalize().multiplyScalar(15),
          0.1
        )
      }
      // zoom out Glabal when scroll to top
      if (snap.globe.zoomOut && snap.savedCameraPosition) {
        camera.position.lerp(
          snap.savedCameraPosition.normalize().multiplyScalar(10),
          0.1
        )
      }

      // zoom in Global when scrolling down
      if (snap.globe.zoomIn && snap.savedCameraPosition && isBig) {
        camera.position.lerp(
          snap.savedCameraPosition.normalize().multiplyScalar(1),
          0.1
        )
      }
    },
    [snap]
  )

  useFrame(frameCallback)

  return (
    <group ref={groupRef}>
      {/*render sphere component */}
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[4.99, 100, 50]} />
        <meshBasicMaterial transparent opacity={0.3} color={"#0e142a"} />
      </mesh>
      <GlobeGlow />

      {globalOffice.map((office, index) => (
        <OfficeMarker
          ref={sphereRef}
          key={index}
          office={office}
          sphereDistance={sphereDistance}
          currentId={index + 1}
        />
      ))}
    </group>
  )
}
