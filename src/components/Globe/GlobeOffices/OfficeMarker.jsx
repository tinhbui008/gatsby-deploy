import { Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMediaQuery } from "beautiful-react-hooks"
import React, { useState } from "react"
import { FaMapMarker } from "react-icons/fa"
import * as THREE from "three"
import { useSnapshot } from "valtio"
import { selecOffice, state } from "../../../store"

//https://discourse.threejs.org/t/azimuth-polar-and-radius-from-xyz/4765/7
const OfficeMarker = React.forwardRef(
  ({ office, currentId, sphereDistance }, ref) => {
    const snap = useSnapshot(state)
    // const ref = useRef()

    const isBig = useMediaQuery("(min-width: 1024px)")

    const [hovered, hover] = useState(false)
    const [visible, setVisible] = useState(true)

    const [visible2, setVisible2] = useState(true)
    var radius = 5
    var parisSpherical = {
      lat: THREE.Math.degToRad(90 - office.lat),
      lon: THREE.Math.degToRad(office.long),
    }

    var parisVector = new THREE.Vector3().setFromSphericalCoords(
      radius,
      parisSpherical.lat,
      parisSpherical.lon
    )

    useFrame(({ camera }) => {
      const distanceToCamera = camera.position.distanceTo(parisVector)

      // hide if overlay is open
      setVisible2(
        !(snap.selectedOfficeId !== null && snap.selectedOfficeId !== currentId)
      )

      // hide office marker after globe
      setVisible(sphereDistance - distanceToCamera > 1)

      // zoom camera in to globe on click of office..
      if (ref.current && snap.selectedOfficeId === currentId) {
        camera.position.lerp(parisVector.normalize().multiplyScalar(8), 0.1)
      }
    })

    const elementStyles = {
      display: visible2 ? "flex" : "none",
      alignItems: "center",
      color: hovered
        ? "#b0fdc6"
        : snap.selectedOfficeId === currentId
        ? "#46b868"
        : "white",
      fontSize: "11px",
      textTransform: "uppercase",
      // minWidth: isBig ? "300px" : "auto",
      width: "auto",
      position: "relative",
      cursor: "pointer",
    }

    return (
      <>
        <group ref={ref}>
          <Html position={parisVector} zIndexRange={[5, 0]}>
            <div
              onPointerOver={event => hover(true)}
              onPointerOut={event => hover(false)}
              onClick={() => {
                // if (isBig) {
                selecOffice(currentId)
                state.savedCameraPosition = parisVector
                setVisible2(false)
                // }
              }}
              style={elementStyles}
            >
              <FaMapMarker
                style={{
                  display: !visible ? "none" : "flex",
                  color: "#006ae9",
                }}
                className="mr-1 text-sm z-10"
              />
              {isBig ? (
                <span
                  style={{
                    display: hovered ? "flex" : "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {office?.title}
                </span>
              ) : null}
            </div>
          </Html>
        </group>
      </>
    )
  }
)

export default OfficeMarker
