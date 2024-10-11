import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const PageCorner = ({ bgColour }) => {
  let imagePath = "../../images/white-corner.png"
  if (bgColour === "blue") {
    imagePath = "../../images/blue-corner.png"
  }

  return (
    <>
      <div className="absolute w-16 left-0 top-0 z-40">
        <StaticImage
          // className="w-[7rem]"
          src={"../../images/white-corner.png"}
          alt="White corner"
        />
      </div>
    </>
  )
}

export default PageCorner
