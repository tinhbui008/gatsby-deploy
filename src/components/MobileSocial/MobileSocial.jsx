import React from "react"
import FacebookIcon from "../../images/svgs/facebook.svg"
import LinkedinIcon from "../../images/svgs/linkedin.svg"
import YoutubeIcon from "../../images/svgs/youtube.svg"
function MobileSocial() {
  return (
    <div className=" relative bottom-0 right-0 flex align-bottom justify-end lg:hidden">
      <a
        className="inline-block w-4 h-4 mr-4 "
        href="https://www.facebook.com/FLSGroup1993"
        target="_blank"
      >
        <img src={FacebookIcon} alt="social icon" />
      </a>
      <a
        className="inline-block w-4 h-4  mr-4"
        href="https://www.linkedin.com/company/flsgroup/"
        target="_blank"
      >
        <img src={LinkedinIcon} alt="social icon" />
      </a>
      <a
        className="inline-block w-4 h-4 "
        href="https://www.youtube.com/c/FLSGroup"
        target="_blank"
      >
        <img src={YoutubeIcon} alt="social icon" />
      </a>
    </div>
  )
}

export default MobileSocial
