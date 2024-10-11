import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./NavigationSidebar.scss"

export function NavigationSidebar({
  isHome,
  isMobile,
  bgColour,
  handleToggle,
  newsPost,
  setNewsLetterModal,
}) {
  return (
    <div
      onClick={handleToggle}
      className={`flex flex-col justify-center content-center w-full items-start lg:justify-start overflow-visible ${
        isMobile && "fixed top-0 left-0 h-full z-50 bg-black/90"
      }`}
    >
      {newsPost ? (
        <Link
          to="/"
          className="mb-5 max-[1024px]:mx-auto 2xl:mb-10 w-40 lg:w-[9rem] xl:w-40 2xl:w-54 xl:mr-auto"
        >
          <StaticImage
            src={"../../images/svgs/fls-logo-tagline-blue.svg"}
            alt="Logo"
          />
        </Link>
      ) : bgColour == "blue" ? (
        <Link
          to="/"
          className="mb-5 max-[1024px]:mx-auto 2xl:mb-10 w-40 lg:w-[9rem] xl:w-40 2xl:w-54 xl:mr-auto"
        >
          <StaticImage
            src={"../../images/logo/fls_logo_white.svg"}
            alt="Logo"
          />
        </Link>
      ) : (
        <Link
          to="/"
          className="mb-5 max-[1024px]:mx-auto 2xl:mb-10 w-40 lg:w-[9rem] xl:w-40 2xl:w-54 xl:mr-auto"
        >
          <StaticImage
            src={"../../images/svgs/fls-logo-tagline-blue.svg"}
            alt="Logo"
          />
        </Link>
      )}

      <div className={`navigation w-full xl:w-auto ${"navigation-" + bgColour}`}>
        <ul className="text-center lg:text-left ">
          <li>
            <AniLink
              fade={true}
              exit={{
                length: 1,
              }}
              entry={{
                delay: 0.6,
              }}
              to="/who-we-are"
              className="text-white lg:text-grey"
            >
              Who we are
            </AniLink>
          </li>
          <li>
            <AniLink
              fade={true}
              duration={0.5}
              to="/capabilities"
              className="text-white lg:text-grey"
            >
              Capabilities
            </AniLink>
          </li>
          <li>
            <AniLink to="/our-work" className="text-white lg:text-grey">
              Our work
            </AniLink>
          </li>
          <li>
            <Link
              to="/safety-quality"
              className="text-white lg:text-grey  whitespace-nowrap"
            >
              Safety & Quality
            </Link>
          </li>
          <li>
            <Link
              to="/moving-responsibly"
              className="text-white lg:text-grey whitespace-nowrap"
            >
              Moving Responsibly
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white lg:text-grey">
              News
            </Link>
          </li>
          <li>
            <Link to="/careers" className="text-white lg:text-grey">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white lg:text-grey">
              Contact
            </Link>
          </li>
          <li className="!mt-4">
            <button
              onClick={e => setNewsLetterModal(true)}
              className={`lg:text-grey font-bold conthrax-heavy uppercase cursor-pointer py-1 px-10 max-[1024px]:rounded-full xl:rounded-tr-full lg:text-[11px] xl:text-[13px] lg:-ml-10
              ${
                bgColour === "blue"
                  ? "text-light_blue bg-white"
                  : "bg-light_blue text-white"
              }`}
            >
              <span className="inline-block text-left">Newsletter Signup</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
