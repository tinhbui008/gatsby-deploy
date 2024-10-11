import { Animator } from "@arwes/animation"
import React from "react"
import { useIntersectionObserver } from "react-intersection-observer-hook"

const AnimatedScrollSection = ({ children, props }) => {
  const [ref, { entry }] = useIntersectionObserver({ threshold: 0.3 })
  const activate = entry && entry.isIntersecting
  return (
    <Animator
      animator={{
        activate,
        manager: "stagger",
        combine: true,
        duration: { stagger: 150 },
      }}
    >
      {React.cloneElement(children, { ref, activate })}
    </Animator>
  )
}

export { AnimatedScrollSection }
