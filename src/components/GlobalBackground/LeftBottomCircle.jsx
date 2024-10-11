import React from "react"
function LeftBottomCircle() {
  // get current time
  const today = new Date()
  const time = today.getHours() + ":" + today.getMinutes()
  return (
    <div className="absolute lg:bottom-10 bottom-24 left-6 lg:left-60 z-20">
      <svg
        id="circle-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 329.4873 340.958"
      >
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M164.7432,340.958C73.9033,340.958,0,267.0547,0,176.2144a164.7754,164.7754,0,0,1,143.0605-163.33l.3907,2.9746A161.7748,161.7748,0,0,0,3,176.2144C3,265.4,75.5576,337.958,164.7432,337.958S326.4873,265.4,326.4873,176.2144h3C329.4873,267.0547,255.583,340.958,164.7432,340.958Z"
            />
            <polygon
              className="cls-1"
              points="140.035 29.833 164.744 12.971 137.787 0 140.035 29.833"
            />
          </g>
        </g>
      </svg>
      <p className="text-white/30 conthrax-bold uppercase text-[10px] leading-[14px]">
        Current Time: {time}
      </p>
      <p className="text-white/30 conthrax-bold uppercase text-[10px] leading-[14px]">
        IP address: 191.188.11
      </p>
    </div>
  )
}

export default LeftBottomCircle
