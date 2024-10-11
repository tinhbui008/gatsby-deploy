import React from "react"
import "./richtext-video.scss"

const RichtextVideo = ({ mainContent }) => (
  <section className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]">
    <div
      className="bg-white rich-text my-8 rich-text-editor"
      dangerouslySetInnerHTML={{ __html: mainContent }}
    ></div>
  </section>
)

export default RichtextVideo
