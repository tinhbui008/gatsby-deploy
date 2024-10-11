import { Circle, Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Box, Flex } from "@react-three/flex"
import { useMediaQuery } from "beautiful-react-hooks"
import React, { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { useSnapshot } from "valtio"
import { selectCapability, state } from "../../../store"

export default ({ name, lon, lat }) => {
  const ref = useRef(null)
  const snap = useSnapshot(state)
  const { camera } = useThree()
  const [hovered, hover] = useState(false)

  const isBig = useMediaQuery("(min-width: 1024px)")

  /**
   * Update Cursor to pointer on hover
   */
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  var radius = 6
  var positionSpherical = useMemo(
    () => ({
      lat: THREE.Math.degToRad(90 - lat),
      lon: THREE.Math.degToRad(lon),
    }),
    [lat, lon]
  )

  useEffect(() => {
    const v = new THREE.Vector3().setFromSphericalCoords(
      radius,
      positionSpherical.lat,
      positionSpherical.lon
    )

    // Put all markers on the same plane
    v.z = 5
    v.y -= 1

    state.capabilityMarkerPositions[name] = v.toArray()
  }, [radius, positionSpherical, name])

  const fontProps = useMemo(
    () => ({
      font: "/fonts/Conthrax/conthrax_bold-webfont.woff",
      fontSize: 0.2,
      letterSpacing: -0.05,
      lineHeight: 1,
      color: hovered ? "#46b868" : "white",
      "material-toneMapped": false,
    }),
    [hovered]
  )

  return (
    <group ref={ref} position={state.capabilityMarkerPositions[name]}>
      <Flex
        flexDirection="row"
        onPointerOver={event => hover(true)}
        onPointerOut={event => hover(false)}
        onClick={() => {
          // if (isBig) {
          selectCapability(name)
          state.savedCameraPosition = camera.position.clone()
          hover(false)
          // }
        }}
      >
        <Box>
          <Circle args={[0.2, 32]}>
            <meshBasicMaterial color="#45b868" />
          </Circle>
        </Box>

        <Box>
          <Text anchorX="left" {...fontProps}>
            {name}
          </Text>
        </Box>
      </Flex>
    </group>
  )
}
