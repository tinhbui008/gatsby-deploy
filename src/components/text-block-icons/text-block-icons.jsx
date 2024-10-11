import React from "react"
import ProjectToggle from "./ProjectToggle"
import "./text-block-icons.scss"
const TextBlockIcons = ({ textBlockData }) => {
  const [activeIdx, setActiveIdx] = React.useState(0)

  const isClicked = idx => {
    setActiveIdx(idx)
  }
  return (
    <section className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem] bg-white grid grid-cols-2 flex-col lg:flex-row text-block-icon my-12">
      <div className="col-span-2 lg:col-span-1 lg:max-w-xs">
        <h3 className="text-light_blue mb-4 gotham-bold">
          {textBlockData?.textTitle}
        </h3>
        <p className="whitespace-pre-wrap	">{textBlockData?.textContent}</p>
      </div>
      <div className="col-span-2 lg:col-span-1 mt-6 lg:mt-0">
        {textBlockData?.toggleList.map((toggleData, index) => {
          return (
            <ProjectToggle
              idx={index}
              toggleData={toggleData}
              key={toggleData.icon?.id}
              activeIdx={activeIdx}
              handleClick={isClicked}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TextBlockIcons
