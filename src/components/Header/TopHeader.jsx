import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function TopHeader({ bgColour }) {
  let backgroundColour = "bg-white"
  if (bgColour === "blue") {
    backgroundColour = "bg-light_blue"
  }

  return (
    <div className={` ${backgroundColour} px-12 py-10 lg:hidden `}>
      <div className="logo w-32 ">
        <Link to="/">
          <StaticImage
            src={"../../images/logo/fls_logo_white.svg"}
            alt="Logo"
          ></StaticImage>
        </Link>
      </div>
    </div>
  )
}

export default TopHeader
