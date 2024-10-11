/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import * as React from "react"
import Footer from "./Footer/Footer"
import { Header } from "./Header/Header"
import TopHeader from "./Header/TopHeader"
import "./layout.css"
import { NewsSidebar } from "./NewsSidebar/NewsSidebar"
import TopRightCircle from "./PageBackgrounds/TopRightCircle"

const LayoutFullScreen = ({ children, title }) => {
  const footerRef = React.useRef()
  return (
    <>
      <div className="internal-pages">
        <div className="absolute w-16 left-0 top-0 z-10">
          <StaticImage
            src={"../../images/white-corner.png"}
            alt="white-corner"
          />
        </div>
        <TopRightCircle />
        <Header bgColour={"blue"} footerRef={footerRef} notFixed={true} />
        <NewsSidebar whiteButton={true} />
        <TopHeader bgColour="blue" />

        <div className="bg-light_blue">
          <main className="">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

LayoutFullScreen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutFullScreen
