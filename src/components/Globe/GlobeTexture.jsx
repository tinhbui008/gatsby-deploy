import { useProgress } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

// import { subscribeKey } from "valtio/utils"
import map from "../../assets/textures/map.png"
import "../../materials/default-custom"
const DOT_COUNT = 120000
const centerVector = new THREE.Vector3(0, 0, 0)
const tempColor = new THREE.Color()
const tempObject = new THREE.Object3D()
const myColors = ["#005696", "#006dbf", "#002f52", "#00365e"] //blue
const colors = new Array(DOT_COUNT)
  .fill()
  .map(() => myColors[Math.floor(Math.random() * Math.floor(myColors.length))])
const globeRadius = 7

//distance function
const getDistance = circlePosition => {
  const distance = new THREE.Vector3()
  distance.subVectors(centerVector, circlePosition).normalize()
  const { x, y, z } = distance
  const cordX = 1 - (0.5 + Math.atan2(z, x) / (2 * Math.PI))
  const cordY = 0.5 + Math.asin(y) / Math.PI
  return new THREE.Vector2(cordX, cordY)
}
//Alpha function
const getAlpha = (distanceVector, imgData) => {
  const { width, height } = imgData
  const { x, y } = distanceVector
  const index = 4 * Math.floor(x * width) + Math.floor(y * height) * (4 * width)
  // 4 because r, g, b, a stored against each pixel
  return imgData.data[index + 3]
}

// Dots render
function Dots() {
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(DOT_COUNT)
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  )
  const ref = useRef()

  useEffect(() => {
    const loader = new THREE.ImageLoader()

    loader.load(map, mapImage => {
      var ctx = document.createElement("canvas")
      ctx.width = mapImage.width
      ctx.height = mapImage.height
      const canv = ctx.getContext("2d")
      canv.drawImage(mapImage, 0, 0)
      const imagedata = canv.getImageData(0, 0, ctx.width, ctx.height)

      if (imagedata)
        for (let b = 0; b < DOT_COUNT; b++) {
          const phi = Math.acos(-1 + (2 * b) / DOT_COUNT)
          const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi
          const positionVector = new THREE.Vector3(0, 0, 0)
          positionVector.setFromSphericalCoords(globeRadius, phi, theta)
          const { x, y, z } = positionVector
          tempObject.lookAt(centerVector)
          tempObject.position.set(x, y, z)
          const alpha = getAlpha(getDistance({ x, y, z }), imagedata)
          if (alpha > 0) {
            tempObject.updateMatrix()
            ref.current.setMatrixAt(b, tempObject.matrix)
          } else {
            //dispose
          }
        }
    })
  }, [])

  useFrame(() => {
    ref.current.rotation.x = 0
    ref.current.rotation.y = -1.55
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null, null, DOT_COUNT]}>
      <circleBufferGeometry radius={5.0} attach="geometry" args={[0.02, 6]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colorArray, 3]}
        />
      </circleBufferGeometry>
      <meshPhongMaterial
        attach="material"
        side={THREE.DoubleSide}
        vertexColors={THREE.VertexColors}
      />
    </instancedMesh>
  )
}
function GlobeTexture() {
  return (
    <mesh scale={[0.71, 0.71, 0.71]}>
      <ambientLight />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
      <Dots />
    </mesh>
  )
}

export default GlobeTexture
