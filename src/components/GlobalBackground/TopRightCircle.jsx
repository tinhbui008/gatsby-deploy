import React from "react"
import "./index.scss"
function TopRightCircle() {
  return (
    <div className="absolute top-0 right-0 z-20 w-60 h-60 xl:w-80 xl:h-80  justify-end overflow-hidden hidden lg:flex">
      <div
        className=" absolute top-10 right-16 lg:right-20 w-fit text-xl"
        style={{ color: "#ffffff26" }}
      >
        <p className="text-white/30 conthrax-bold uppercase text-xs">168.1.1</p>
        <p className="text-white/30 conthrax-bold uppercase text-xs">199.8.0</p>
      </div>
      <svg className="svg-circle-dash">
        <circle
          id="svg-circle"
          className="svg-circle"
          cx="210"
          cy="210"
          r="200"
        />
      </svg>
    </div>
  )
}

export default TopRightCircle
