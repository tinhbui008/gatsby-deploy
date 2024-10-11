/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { AnimatorGeneralProvider } from "@arwes/animation"
import { ArwesThemeProvider } from "@arwes/core"
import React from "react"
import "./src/styles/global.scss"

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    // <ArwesThemeProvider>
    //   <style>{`
    //     .arwes-frame__structure > svg > g > g > path{opacity:0.06!important}
    //     .arwes-frame{
    //       padding:22px 32px;
    //     }
    //     `}</style>
    //     <AnimatorGeneralProvider
    //       animator={{
    //         duration: { enter: 300, exit: 200 },
    //       }}
    //     >
    //       {element}
    //     </AnimatorGeneralProvider>
    // </ArwesThemeProvider>
    <>{element}</>
    // {element}
  )
}
