import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { OrbitControls, Stars, useProgress, Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "beautiful-react-hooks"
import React, { lazy, Suspense, useEffect, useRef, useState } from "react"
import { useSnapshot } from "valtio"
import { state } from "../../store"
import GlobalBackgrounds from "../GlobalBackground/GlobalBackgrounds"
import ImageBackground from "../Globe/GlobeBackgrounds/GlobeBackgrounds"
// import CapabilityMarkerGroup from "../Globe/GlobeCapabilities/CapabilityMarkerGroup"
import PageLoader from "../helpers/PageLoader"
import Globe from "./Globe"
import GlobeTexture from "./GlobeTexture"
import GlobeTitle from "./GlobeTitle"
// const Globe = lazy(() => import("./Globe"))
const CapabilityMarkerGroup = lazy(() =>
  import("./../Globe/GlobeCapabilities/CapabilityMarkerGroup")
)
// const GlobeTexture = lazy(() => import("./GlobeTexture"))
function GlobeCanvas({ globalData, globalCapability }) {
  const snap = useSnapshot(state)
  const isBig = useMediaQuery("(min-width: 1024px)")
  const [currentPosY, setCurrentPosY] = useState(0)

  const { progress } = useProgress()
  useScrollPosition(
    ({ prevPos, currPos }) => {
      setCurrentPosY(currPos.y)
    },
    [currentPosY]
  )
  const globeRef = useRef()
  return (
    <Canvas
      style={{
        height: "unset",
        // minHeight: currentPosY >= -180 ? "0" : "100%",
        // maxHeight: currentPosY <= -180 ? "100vh" : "",
        pointerEvents: currentPosY < -60 ? "none" : "auto",
        opacity: currentPosY <= -100 ? "0" : "1",
        transition: "all 0.8s ease",
      }}
      className="globe-canvas mt-4 lg:mt-0"
      dpr={[1, 2]}
      gl={{ powerPreference: "high-performance" }}
      camera={{ position: [10, 0, -4.5] }}
      ref={globeRef}
    >
      <Suspense fallback={<PageLoader />}>
        {snap.globe.isMainElement && (
          <Html
            center
            fullscreen={true}
            zIndexRange={[0, 7]}
            wrapperClass="custom"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
            }}
          >
            {/* <GlobeTitle /> */}
            <GlobalBackgrounds />
          </Html>
        )}
        {snap.globe.isMainElement && (
          <Html
            center
            fullscreen={true}
            zIndexRange={[7, 10]}
            wrapperClass="globe-title"
            style={{
              position: "absolute",
              maxWidth: "500px",
              height: "auto",
              zIndex: "10",
            }}
          >
            <GlobeTitle />
          </Html>
        )}
        {isBig && (
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
          />
        )}

        <ImageBackground />
        <Globe globalOffice={globalData.offices} />
        {snap.globe.isMainElement && snap.canOrbit ? (
          <CapabilityMarkerGroup globalCapability={globalCapability} />
        ) : null}
      </Suspense>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.6}
        enableZoom={false}
        enableRotate={snap.canOrbit}
        enablePan={false}
        dampingFactor={0.2}
      />
      <GlobeTexture />
    </Canvas>
  )
}

export default GlobeCanvas
