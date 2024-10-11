import { useProgress, Html } from "@react-three/drei"
import React from "react"
import "./PageLoader.scss"
import FLSIcon from "../../images/svgs/fls-icon-colors.svg"

export default function PageLoader() {
  const { progress } = useProgress()

  let isVisible = false

  return (
    <Html
      calculatePosition={isVisible ? undefined : () => [0, 0, 0]}
      wrapperClass="page-loader-container relative"
    >
      <div className="page-loader relative">
        <div className="m-auto content ">
          <FLSIcon className="w-20 h-20 m-auto mb-4 absolute top-[40vh] lg:top-[35vh] z-20 left-1/2 -translate-x-1/2" />
          <div className="text-white text-sm absolute top-[50vh] z-20 left-1/2 -translate-x-1/2">
            {Math.floor(progress)} % loaded
          </div>
        </div>
      </div>
    </Html>
  )
}
