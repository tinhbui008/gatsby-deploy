import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
const HistoryText = ({ history }) => {
  return (
    <section
      id="history"
      className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]"
    >
      <div className="mb-8">
        <h3 className="uppercase text-light_blue lg:text-3xl">
          {history.title}
        </h3>
        <p className="mb-4">{history.description}</p>
      </div>
      <div className="time-line">
        {history.historyBlock?.map((timeline, index) => {
          return (
            <div key={index} className="p-8 lg:p-10 bg-[#f3f3f3] mb-10">
              <div className="">
                <h4 className="uppercase text-light_blue text-[1.4rem] mb-4">
                  {timeline?.title}
                </h4>
              </div>
              <div className="lg:flex flex-col">
                <div className="lg:pt-0">
                  <GatsbyImage
                    image={getImage(timeline?.image?.localFile)}
                    alt={timeline.title}
                  />
                </div>
                <div
                  className="max-w-full pt-3"
                  dangerouslySetInnerHTML={{ __html: timeline?.content }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HistoryText
