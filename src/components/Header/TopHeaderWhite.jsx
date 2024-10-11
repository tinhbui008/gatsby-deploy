import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function TopHeaderWhite({ darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "bg-neutral-900" : "bg-white"
      }  2 px-12 py-10 lg:hidden `}
    >
      <div className="logo w-32 ">
        <Link to="/">
          <StaticImage
            src={"../../images/logo/fls-logo-tagline-blue.svg"}
            alt="Logo FLS"
          ></StaticImage>
        </Link>
      </div>
    </div>
  )
}

export default TopHeaderWhite
