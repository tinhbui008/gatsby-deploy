import { Float } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMediaQuery } from "beautiful-react-hooks"
import React, { useRef } from "react"
import * as THREE from "three"
import CapabilitArc from "./CapabilityArc"
import CapabilityMarker from "./CapabilityMarker"
import { state } from "../../../store"
import { useSnapshot } from "valtio"
export default ({ globalCapability }) => {
  const ref = useRef(null)
  const snap = useSnapshot(state)
  const isBig = useMediaQuery("(min-width: 1024px)")

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.lookAt(camera.position)
    }
  })

  const projectsPosition = {
    lat: isBig ? 35 : 35,
    lon: isBig ? -31 : -28,
  }

  const tradingPosition = {
    lat: isBig ? -8 : -8,
    lon: isBig ? 0 : 0,
  }

  const warehousingPosition = {
    lat: isBig ? -1 : -1,
    lon: isBig ? -36 : -26,
  }

  const logisticsPosition = {
    lat: isBig ? 22 : 22,
    lon: isBig ? 26 : 12,
  }

  const arcCapabilities = [
    {
      start: globalCapability[0].title,
      end: globalCapability[3].title,
      mid: new THREE.Vector3(3.5, 0.5, 5.5),
      animation: {
        offset: 0.1,
      },
    },
    {
      start: globalCapability[3].title,
      end: globalCapability[2].title,
      mid: new THREE.Vector3(0, 0.5, 5),
      animation: {
        offset: 0.3,
      },
    },
    {
      start: globalCapability[2].title,
      end: globalCapability[0].title,
      mid: new THREE.Vector3(3, 0, 5),
      animation: {
        offset: 0.6,
      },
    },
    {
      start: globalCapability[1].title,
      end: globalCapability[3].title,
      mid: new THREE.Vector3(5, 0, 5),
      animation: {
        offset: 0.9,
      },
    },
    {
      start: globalCapability[0].title,
      end: globalCapability[2].title,
      mid: new THREE.Vector3(3, 0.5, 5),
      animation: {
        offset: 0.12,
      },
    },
    {
      start: globalCapability[3].title,
      end: globalCapability[2].title,
      mid: new THREE.Vector3(3, 2, 5),
      animation: {
        offset: 0.15,
      },
    },
    {
      start: globalCapability[2].title,
      end: globalCapability[3].title,
      mid: new THREE.Vector3(1, 2, 6),
      animation: {
        offset: 0.18,
      },
    },
    {
      start: globalCapability[1].title,
      end: globalCapability[2].title,
      mid: new THREE.Vector3(5, 0, 6),
      animation: {
        offset: 0.21,
      },
    },

    {
      start: globalCapability[0].title,
      end: globalCapability[1].title,
      mid: new THREE.Vector3(3, 0.5, 5),
      animation: {
        offset: 0.24,
      },
    },
    {
      start: globalCapability[3].title,
      end: globalCapability[0].title,
      mid: new THREE.Vector3(3, 0, 6),
      animation: {
        offset: 0.27,
      },
    },
    {
      start: globalCapability[2].title,
      end: globalCapability[1].title,
      mid: new THREE.Vector3(5, 0, 4),
      animation: {
        offset: 0.3,
      },
    },
    {
      start: globalCapability[1].title,
      end: globalCapability[0].title,
      mid: new THREE.Vector3(5, 0, 6),
      animation: {
        offset: 0.33,
      },
    },
  ]

  const arcCapabilitiesTwo = [
    {
      start: "TRADING",
      end: "PROJECTS",
      mid: new THREE.Vector3(3.5, 0.5, 5.5),
      animation: {
        offset: 0.3,
      },
    },
    {
      start: "WAREHOUSING",
      end: "PROJECTS",
      mid: new THREE.Vector3(0, 0.5, 5),
      animation: {
        offset: 0.5,
      },
    },
    {
      start: "LOGISTICS",
      end: "PROJECTS",
      mid: new THREE.Vector3(3, 0, 5),
      animation: {
        offset: 0.8,
      },
    },
    {
      start: "WAREHOUSING",
      end: "TRADING",
      mid: new THREE.Vector3(5, 0, 5),
      animation: {
        offset: 0.11,
      },
    },
    {
      start: "PROJECTS",
      end: "LOGISTICS",
      mid: new THREE.Vector3(3, 0.5, 5),
      animation: {
        offset: 0.14,
      },
    },
    {
      start: "LOGISTICS",
      end: "WAREHOUSING",
      mid: new THREE.Vector3(3, 2, 5),
      animation: {
        offset: 0.17,
      },
    },
    {
      start: "TRADING",
      end: "PROJECTS",
      mid: new THREE.Vector3(1, 2, 6),
      animation: {
        offset: 0.2,
      },
    },
    {
      start: "WAREHOUSING",
      end: "LOGISTICS",
      mid: new THREE.Vector3(5, 0, 6),
      animation: {
        offset: 0.23,
      },
    },
    {
      start: "LOGISTICS",
      end: "TRADING",
      mid: new THREE.Vector3(3, 0.5, 5),
      animation: {
        offset: 0.26,
      },
    },
    {
      start: "PROJECTS",
      end: "WAREHOUSING",
      mid: new THREE.Vector3(3, 0, 6),
      animation: {
        offset: 0.29,
      },
    },
    {
      start: "TRADING",
      end: "PROJECTS",
      mid: new THREE.Vector3(5, 0, 4),
      animation: {
        offset: 0.32,
      },
    },
    {
      start: "LOGISTICS",
      end: "PROJECTS",
      mid: new THREE.Vector3(5, 0, 6),
      animation: {
        offset: 0.35,
      },
    },
  ]

  return (
    <group ref={ref}>
      <Float rotationIntensity={0.3} floatIntensity={0.3}>
        <CapabilityMarker
          name={globalCapability[0].title}
          lat={warehousingPosition.lat}
          lon={warehousingPosition.lon}
        />
        <CapabilityMarker
          name={globalCapability[1].title}
          lat={projectsPosition.lat}
          lon={projectsPosition.lon}
        />
        <CapabilityMarker
          name={globalCapability[2].title}
          lat={tradingPosition.lat}
          lon={tradingPosition.lon}
        />
        <CapabilityMarker
          name={globalCapability[3].title}
          lat={logisticsPosition.lat}
          lon={logisticsPosition.lon}
        />
        {/* <CapabilityMarker name="BEHINDGLOBE" lat={0} lon={150} /> */}
        <CapabilitArc arcs={arcCapabilities} />
        <CapabilitArc arcs={arcCapabilitiesTwo} />
      </Float>
    </group>
  )
}
