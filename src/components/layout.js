/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import * as React from "react"
import { Header } from "../components/Header/Header"
import TopHeader from "../components/Header/TopHeader"
import TopRightCircle from "../components/PageBackgrounds/TopRightCircle"
import Footer from "./Footer/Footer"
import "./layout.css"
import { NewsSidebar } from "./NewsSidebar/NewsSidebar"

const Layout = ({ children, title }) => {
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
        <Header bgColour={"blue"} footerRef={footerRef} />
        <NewsSidebar whiteButton={true} />
        <TopHeader bgColour="blue" />

        <div className="bg-light_blue pb-12 lg:py-12 lg:pt-32 lg:pl-[200px] xl:pl-[50px]">
          <main className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:pl-[12rem]">
            <h1 className="text-white text-[24px] lg:text-6xl uppercase mb-12 lg:mb-20 col-span-2">
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
