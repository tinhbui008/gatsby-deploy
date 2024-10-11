import { withAnimator } from "@arwes/animation"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import SwiperCore, { Keyboard, Mousewheel, Navigation } from "swiper"
// import Swiper core and required modules
import "swiper/css"
import "swiper/css/navigation"
import { duration, onAnimateEntering, onAnimateExiting } from "../Animated"
import SpotlightHero from "../SpotlightHero/SpotlightHero"
import "./careers-internal-page.scss"

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard])

const Careers = ({ careers, animator }) => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDozNQ==" }) {
        title
        content
        careerSpotlight {
          spotlightContent
          spotlight {
            spotlightName
            spotlightRole
            quote
            fromName
            fromRole
            spotlightThumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 425, height: 425, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)
  const spotLight = data.wpPage.careerSpotlight.spotlight
  const ref = useRef()
  animator.setupAnimateRefs(ref)
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (animator.animate) {
      setDisabled(false)
      setTimeout(() => setDisabled(true), 1000)
    }
  }, [animator])
  return (
    <div ref={ref}>
      <Link to="/careers">
        <h2 className="mb-8 text-white uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]">
          {careers?.title}
        </h2>
      </Link>

      <div>
        <p className="text-white font-semibold">{careers?.content}</p>

        <div className="my-4">
          <Link to={"/careers/"} className="read-more">
            Read more
          </Link>
        </div>

        <h5 className="text-green conthrax-heavy uppercase text-sm solid-line__green">
          <span>Heroes of FLS</span>
        </h5>

        <p
          className="text-white mb-2"
          dangerouslySetInnerHTML={{
            __html: data.wpPage.careerSpotlight?.spotlightContent,
          }}
        ></p>
      </div>
      <SpotlightHero
        spotlight={spotLight}
        whiteLayout={false}
        // style={{ visibility: activate ? "initial" : "hidden" }}
      />
    </div>
  )
}

const AnimatedCarrers = withAnimator({
  duration,
  onAnimateEntering,
  onAnimateExiting,
})(Careers)

const CareersHome = forwardRef(({ careers }, ref) => {
  return (
    <section ref={ref} className="careers my-8 py-8 pt-18 lg:my-16 lg:py-16">
      <AnimatedCarrers {...{ careers }} />
    </section>
  )
})
export default CareersHome
