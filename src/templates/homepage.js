import { useProgress } from "@react-three/drei"
import { graphql } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { AnimatedScrollSection } from "../components/Animated/AnimatedScrollSection"
import Banner from "../components/Banner/Banner"
import Capabilities from "../components/Capabilities/Capabilities.Animated"
import Careers from "../components/careers/careers"
import Contact from "../components/contact/ContactAnimated"
import Footer from "../components/Footer/Footer"
import GlobeContainer from "../components/Globe/GlobeContainer"
import { Header } from "../components/Header/Header"
import HomepageLayout from "../components/homepage-layout"
import NewsHomepage from "../components/news-homepage/news-homepage"
import { NewsSidebar } from "../components/NewsSidebar/NewsSidebar"
import OurWorkHome from "../components/our-work-home/our-work-home"
import PageCorner from "../components/page-corner/page-corner"
import SafetyQualityHome from "../components/safety-quality-home-page/safety-quanlity-homepage"
import Seo from "../components/seo"
import WhoWeAreHome from "../components/who-we-are-homepage/who-we-are-home-page"
import { Button } from "@arwes/core"
import { navigate } from "gatsby"

const IndexPage = ({ data }) => {
  // setup news data
  const newsHomeData = data.wpPage.homepage?.news
  const banner = data.wp.siteSettings.siteSettingBanner
  // const [corporateVideoStorage, setCorporateVideoStorage] = useState("")
  const { progress } = useProgress()
  const footerRef = useRef()

  const onCorporateVideoClick = () => {
    // sessionStorage.setItem("corporate-video", true)
    navigate("/who-we-are#corporate-video")
  }

  const pageContent = (
    <>
      <div className="homepage">
        {progress === 100 && (
          <>
            <PageCorner bgColour={"blue"} />
            <NewsSidebar whiteButton={false} />
            <Header isHome={true} footerRef={footerRef} />
            <div className="fixed bottom-10 opacity-0 right-4 z-[50] flex justify-end !px-3 animate-fadeInUp animation-delay-2000">
                {/* <Button
                  onClick={onCorporateVideoClick}
                  className="text-xs leading-5 w-8/12 ml-auto animation-delay-6000"
                >
                  Watch our World Movers Corporate Video <p className="text-green conthrax-heavy">Click here</p>
                </Button> */}
                <button
                  className="bg-black/90 lg:bg-black/50 p-4 border-2 border-[#4AACC1] shadow-xl text-white uppercase rounded-xl text-[12px] animate-pulseAnimation"
                  onClick={onCorporateVideoClick}
                >
                  Watch our <br /> World Movers Corporate Video{" "}
                </button>
              </div>
          </>
        )}
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        {banner.toggleDisplay && <Banner banner={banner} />}
        <GlobeContainer />

        {progress === 100 && (
          <HomepageLayout>
            {/* <ScrollAnimation className="above-all" animateIn="fadeIn" delay={250}> */}
            <AnimatedScrollSection>
              <WhoWeAreHome data={data} section={"who-we-are"} />
            </AnimatedScrollSection>

            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation animateIn="fadeIn" delay={250}> */}
            <AnimatedScrollSection>
              <Capabilities isHome={true} />
            </AnimatedScrollSection>

            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation animateIn="fadeIn" delay={250}> */}
            <AnimatedScrollSection>
              <OurWorkHome ourWorkData={data.wpPage?.homepage?.ourWork} />
            </AnimatedScrollSection>

            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation className="above-all" animateIn="fadeIn" delay={250}> */}
            <AnimatedScrollSection>
              <SafetyQualityHome
                safeQualityData={data.wpPage?.homepage?.safetyQualityStandards}
              />
            </AnimatedScrollSection>
            {/* </ScrollAnimation> */}
            <AnimatedScrollSection>
              <Careers careers={data.wpPage?.homepage?.careers} />
            </AnimatedScrollSection>

            {/* <ScrollAnimation animateIn="fadeIn" delay={250}> */}
            <AnimatedScrollSection>
              <NewsHomepage newsHomeData={newsHomeData} />
            </AnimatedScrollSection>
            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation animateIn="fadeIn" delay={250}> */}

            <Contact contactData={data.wpPage?.homepage?.contact} />

            {/* </ScrollAnimation> */}
          </HomepageLayout>
        )}
        {progress === 100 && <Footer ref={footerRef} />}
      </div>
    </>
  )

  return <>{pageContent}</>
}
export const query = graphql`
  query ($slug: String!) {
    wp {
      siteSettings {
        siteSettingBanner {
          toggleDisplay
          title
          videoPopup
        }
      }
    }

    wpPage(slug: { eq: $slug }) {
      title
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200)
            }
          }
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200)
            }
          }
        }
      }
      homepage {
        news {
          newsPicker {
            ... on WpPost {
              id
              slug
              title
              excerpt
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 688
                        height: 458
                        transformOptions: { cropFocus: CENTER, fit: COVER }
                      )
                    }
                  }
                }
              }
            }
          }
          newsPicker2 {
            ... on WpPost {
              id
              title
              excerpt
              slug
              featuredImage {
                node {
                  localFile {
                    childrenImageSharp {
                      fluid(maxWidth: 350, quality: 90, fit: COVER) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
        contact {
          description
          title
        }
        ourWork {
          title
          description
          featuredIndustriesText

          featuredBlock {
            title
            link {
              url
              title
              target
            }
            image {
              id
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 600, width: 600, placeholder: BLURRED)
                }
              }
            }
          }
        }
        careers {
          title
          content
        }
        safetyQualityStandards {
          description
          title
        }
        whoWeAre {
          content
          name
          role
          video
          videoBackgroundLoop
          readMoreLink {
            url
            title
          }
          personImage {
            id
            slug
            title
            localFile {
              childImageSharp {
                gatsbyImageData(height: 140, width: 130)
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage
