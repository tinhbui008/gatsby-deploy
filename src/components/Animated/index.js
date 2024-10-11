import GlitchText from "react-glitch-effect/core/GlitchText"
import { Text } from "@arwes/core"
import React from "react"
import anime from "animejs"
import { withAnimator } from "@arwes/animation"
const AnimatedText = ({
  as,
  className,
  children,
  duration = 2000,
  glitchProps,
  ...props
}) => (
  <Text {...{ as, className, props }}>
    <GlitchText duration={duration} {...glitchProps}>
      {children}
    </GlitchText>
  </Text>
)

export const duration = { enter: 200, exit: 200 }

export function onAnimateEntering(animator, componentRef) {
  anime({
    targets: componentRef?.current,
    duration: animator.duration.enter,
    easing: "linear",
    opacity: [0, 1],
  })
}

export function onAnimateExiting(animator, componentRef) {
  anime({
    targets: componentRef?.current,
    duration: animator.duration.enter,
    easing: "linear",
    opacity: [1, 0],
  })
}

export const withAnimationHooks = Component =>
  withAnimator({
    duration,
    onAnimateEntering,
    onAnimateExiting,
  })(Component)

export { AnimatedText }
