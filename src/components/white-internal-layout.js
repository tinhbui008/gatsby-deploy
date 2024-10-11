/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import * as React from "react"
import Footer from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import TopRightCircle from "../components/PageBackgrounds/TopRightCircle"
import Seo from "../components/seo"
import TopHeaderWhite from "./Header/TopHeaderWhite"
import { NewsSidebar } from "./NewsSidebar/NewsSidebar"

const WhiteInternalLayout = ({
  children,
  title,
  newsPost,
  darkMode,
  className,
}) => {
  const footerRef = React.useRef()
  return (
    <>
      <div className="internal-pages">
        <Seo title={title} />
        <div className="absolute w-16 left-0 top-0 z-10">
          <StaticImage src={"../../images/blue-corner.png"} alt="blue-corner" />
        </div>
        <TopRightCircle pageColour={darkMode ? "" : "white"} />
        <Header
          bgColour={darkMode ? "blue" : "white"}
          newsPost={newsPost}
          footerRef={footerRef}
        />
        <NewsSidebar whiteButton={false} />
        <TopHeaderWhite darkMode={darkMode} />

        <div
          className={`${
            darkMode ? " bg-neutral-900" : "bg-white"
          } pb-12 lg:py-12 lg:pt-32`}
        >
          <main className="container z-30 mx-auto px-12 lg:pl-[220px] 2xl:pl-[15rem]">
            <h1
              className={`text-light_blue uppercase mb-12 text-[24px] md:text-[50px] lg:text-[70px] ${
                newsPost ? "lg:text-[34px]" : ""
              } ${className || ""}`}
            >
              {title}
            </h1>
            {children}
          </main>
        </div>
      </div>
      <Footer ref={footerRef} />
    </>
  )
}

WhiteInternalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WhiteInternalLayout
