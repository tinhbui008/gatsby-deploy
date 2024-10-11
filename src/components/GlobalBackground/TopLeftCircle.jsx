import React from "react"

function TopLeftCircle() {
  return (
    <div className="absolute top-11 left-40 z-20 flex justify-center hidden lg:block">
      <div
        className=" absolute top-10 -left-16 w-fit"
        style={{ color: "#ffffff26" }}
      >
        <p className="text-white/30 conthrax-bold uppercase text-xs">
          10D40'03SOUTH
        </p>
        <p className="text-white/30 conthrax-bold uppercase text-xs">
          {" "}
          LANDING
        </p>
      </div>
      <svg id="svg-circle-line">
        <circle id="svg-circle" className="svg-circle" cx="55" cy="55" r="50" />
      </svg>
    </div>
  )
}

export default TopLeftCircle
