import React from "react"
import "./index.scss"

function TopRightCircle({ pageColour }) {
  let stroke = "#9fc2e0"
  let textColour = "text-white/60"

  if (pageColour == "white") {
    stroke = "#afb3b8"
    textColour = "text-black/30"
  }

  return (
    <div className="internal absolute z-10 top-0 right-0 overflow-hidden pointer-events-none">
      <div className=" absolute top-10 right-4 lg:right-20 w-fit text-xl">
        <p
          className={`${textColour} conthrax-bold uppercase text-xs lg:text-base`}
        >
          13.7781
        </p>
        <p
          className={`${textColour} conthrax-bold uppercase text-xs lg:text-base`}
        >
          100.443412
        </p>
      </div>
      <svg className="svg-circle-dash absolute">
        <circle
          id="svg-circle"
          stroke={stroke}
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
