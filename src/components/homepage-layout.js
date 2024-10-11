/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "react-intersection-observer-hook"
import { addGlobeToBg, removeGlobeFromBg } from "../store"

function doScrolling(elementY, duration) {
  var startingY = window.pageYOffset
  var diff = elementY - startingY
  var start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

const HomepageLayout = ({ children }) => {
  const [ref, { entry }] = useIntersectionObserver()
  const isIntersecting = entry && entry.isIntersecting
  React.useEffect(
    () => (isIntersecting ? addGlobeToBg() : removeGlobeFromBg()),
    [isIntersecting]
  )
  const itemsRef = useRef([])
  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, children.length)
  }, [children])
  // React.useEffect(() => console.log(itemsRef), [itemsRef])
  // scrollY position
  const [currentPosY, setCurrentPosY] = useState(0)
  const [activeScroll, setActiveScroll] = useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    setCurrentPosY(currPos.y)
    if (currPos.y <= -200) {
      setActiveScroll(true)
    } else {
      setActiveScroll(false)
    }
  }, [])
  useEffect(() => {
    if (activeScroll) window.scroll(0, 800)
  }, [activeScroll])
  return (
    <>
      <div
        className={`bg-dark_blue homepage-layout relative`}
        ref={ref}
        style={{
          marginTop: 60,
        }}
      >
        <main
          style={{
            overflowX: "hidden",
            transition: "top 0.5s ease",
            scrollSnapType: "y mandatory",
          }}
          className={`container z-20 mx-auto pb-32 lg:pb-10 px-12 lg:pl-[200px] xl:pl-[16rem] 2xl:pl-[14rem] relative`}
        >
          {children}
        </main>
      </div>
    </>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
