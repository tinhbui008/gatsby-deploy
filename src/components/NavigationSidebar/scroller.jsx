import React, { useCallback, useEffect, useRef } from "react"

export function Scroller() {
  const ref = useRef()

  // The scroll listener
  const handleScroll = useCallback(() => {
  }, [])

  // Attach the scroll listener to the div
  useEffect(() => {
    const div = ref.current
    // Attach a scroll listener to the div
    div.addEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="scrollableContainer" ref={ref}>
      <div className="content">This is the content that scrolls.</div>
    </div>
  )
}
