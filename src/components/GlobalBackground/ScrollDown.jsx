import React from "react"
import scrollDown from "../../images/scroll-down.png"
function ScrollDown() {
  return (
    <div className="absolute bottom-0 w-full justify-center z-20 scale-50 hidden lg:flex">
      <img
        className="animate-bounce"
        src={scrollDown}
        style={{ animation: "bounce 2s infinite" }}
        alt="Scroll down icon"
      />
    </div>
  )
}

export default ScrollDown
