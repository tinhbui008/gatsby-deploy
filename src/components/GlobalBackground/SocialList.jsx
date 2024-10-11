import { StaticImage } from "gatsby-plugin-image"
import React from "react"
function SocialList() {
  return (
    <>
      <div className=" absolute lg:bottom-4 -bottom-40 right-4 z-10">
        <div className=" relative bottom-0 right-0 flex align-bottom justify-end ">
          <a
            className="inline-block w-5 h-5 mr-5 "
            target="_blank"
            href="https://www.facebook.com/FLSGroup1993"
          >
            <StaticImage
              src={"../../images/svgs/facebook.svg"}
              alt="Facebook icon"
            />
          </a>
          <a
            className="inline-block w-5 h-5 mr-5"
            href="https://www.linkedin.com/company/flsgroup/"
            target="_blank"
          >
            <StaticImage
              src={"../../images/svgs/linkedin.svg"}
              alt="Linkend icon"
            />
          </a>
          <a
            className="inline-block w-5 h-5 relative top-1"
            href="https://www.youtube.com/c/FLSGroup"
            target="_blank"
          >
            <StaticImage
              src={"../../images/svgs/youtube.svg"}
              alt="Youtube icon"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialList
