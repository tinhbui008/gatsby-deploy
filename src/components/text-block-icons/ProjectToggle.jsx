import React, { useEffect, useState } from "react"

function ProjectToggle({ toggleData, activeIdx, idx, handleClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = event => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(activeIdx === idx)
  }, [activeIdx, idx])

  return (
    <div className="project-item mb-5">
      <div
        className="header flex justify-between items-end border-b-2 border-green pb-2 cursor-pointer sticky"
        onClick={toggle}
      >
        <div className="flex items-end">
          <div className=" mr-4" style={{ maxWidth: "30px" }}>
            {toggleData.icon ? (
              <img src={toggleData.icon?.sourceUrl} alt="icon" />
            ) : null}
          </div>
          <h5 className="gotham-bold">{toggleData?.header}</h5>
        </div>
        <div className={`text-green arrow ${isOpen ? "active" : ""}`}>V</div>
      </div>

      <>
        <div
          style={{ maxHeight: isOpen ? "9999px" : "0" }}
          className={`${isOpen ? "active" : ""} content rich-text-editor mt-3`}
          dangerouslySetInnerHTML={{ __html: toggleData.content }}
        ></div>
      </>
    </div>
  )
}

export default ProjectToggle
