import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
// import Swiper core and required modules
import SwiperCore, { Keyboard, Mousewheel, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
//Import Swiper styles
import "../components/careers/careers-internal-page.scss"
import Seo from "../components/seo"
import SpotlightHero from "../components/SpotlightHero/SpotlightHero"
import WhiteInternalLayout from "../components/white-internal-layout"
import HeroStandard from "../components/HeroStandard/HeroStandard"
import AvailableJobs from "../components/AvailableJobs"

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard])

const HeroCareers = ({ spotlight }) => {
  return <SpotlightHero spotlight={spotlight} whiteLayout={true} />
}

const FutureThinkers = ({ gallery }) => {
  return (
    <div className="full-width-slider">
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="thinkers-swiper"
      >
        {gallery.map((node, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="">
                <GatsbyImage
                  image={getImage(node?.localFile)}
                  alt="Future Thinkers"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="slider-overlay"></div>
      <div className="prev"></div>
      <div className="next"></div>
    </div>
  )
}
const FlsMoments = ({ gallery }) => (
  <div className="full-width-slider">
    <Swiper
      cssMode={true}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      pagination={false}
      keyboard={true}
      className="slider-white-layout"
    >
      {gallery.map((node, index) => {
        return (
          <SwiperSlide key={index}>
            <GatsbyImage
              image={getImage(node?.localFile)}
              alt="Future Thinkers"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
    <div className="slider-overlay"></div>
    <div className="prev"></div>
    <div className="next"></div>
  </div>
)
const CareersInternalPages = ({ data }) => {
  const careersData = data.wpPage
  const futureThinkersgallery =
    careersData.careerSpotlight.futureThinkers.gallery
  const momentgallery = careersData.careerSpotlight.flsMoments.gallery
  const careersHero = careersData.careerSpotlight?.careersHero
  const careerList = data?.wpPage?.careerSpotlight?.careers?.careerList;
  const careersEmptyText = data?.wpPage?.careerSpotlight?.careers?.emptyTextPlaceholder;

  return (
    <>
      <WhiteInternalLayout title={careersData?.title}>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <HeroStandard data={careersHero} />

        <section className="careers">
          <div className="grid grid-cols-12 order-1">
            <div
              className="col-span-12 rich-text-editor"
              dangerouslySetInnerHTML={{ __html: careersData?.content }}
            ></div>
          </div>
        </section>

        <section className="fls-moments my-8 pb-6">
          <h2 className="text-light_blue text-3xl font-bold uppercase">
            FLS Moments
          </h2>
          <div
            className=" mt-5 mb-8"
            dangerouslySetInnerHTML={{
              __html: careersData?.careerSpotlight.flsMoments.content,
            }}
          ></div>
          <FlsMoments gallery={momentgallery} />
        </section>

        <section className="careers-heros">
          <h2 className="text-light_blue text-3xl font-bold uppercase">
            HEROES OF FLS
          </h2>
          <div
            className=" mt-5 mb-8"
            dangerouslySetInnerHTML={{
              __html: careersData?.careerSpotlight.spotlightContent,
            }}
          ></div>
          <HeroCareers spotlight={careersData?.careerSpotlight.spotlight} />
        </section>

        <section className="future-thinkers my-8 pb-6">
          <h2 className="text-light_blue text-3xl font-bold uppercase">
            Future Thinkers
          </h2>
          <div
            className=" mt-5 mb-8"
            dangerouslySetInnerHTML={{
              __html: careersData?.careerSpotlight.futureThinkers.content,
            }}
          ></div>
          <FutureThinkers gallery={futureThinkersgallery} />
        </section>
        <div className="my-8 pb-6 lg:flex">
          <div className="lg:w-2/4">
            <h2 className="text-light_blue text-3xl font-bold uppercase">
              {careersData.careerSpotlight?.joinUs?.title}
            </h2>
            <div
              className=" mt-5 mb-8 rich-text-editor"
              dangerouslySetInnerHTML={{
                __html: careersData?.careerSpotlight?.joinUs?.content,
              }}
            ></div>
          </div>
          <div className="lg:w-2/4 lg:pl-20">
            {careersData.careerSpotlight.joinUs.image ? (
              <div className="relative mt[-20px]">
                <GatsbyImage
                  image={getImage(
                    careersData.careerSpotlight?.joinUs?.image?.localFile
                  )}
                  alt={"Join FLS"}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className="my-10">
          <AvailableJobs careers={careerList} placeholder={careersEmptyText} />
        </div>
      </WhiteInternalLayout>
    </>
  )
}
export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      content
      careerSpotlight {
        careers {
          emptyTextPlaceholder
          careerList {
            __typename
            ... on WpCareer{
              slug
              date
              careerSingle {
                coreResponsibilities
                department
                email
                jobLevel
                jobPurposes
                linkedln
                location
                networkInteraction
                qualification
                reportTo
                requiredSkills
                section
                subordinates
                title
              }
            }
          }
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1266)
            }
          }
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1266)
            }
          }
        }
      }
      careerSpotlight {
        careersHero {
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1700, height: 750)
              }
            }
          }
        }
        joinUs {
          title
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1110, height: 1064)
              }
            }
          }
        }
        spotlightContent
        futureThinkers {
          content
          gallery {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1266, height: 600)
              }
            }
          }
        }
        spotlight {
          spotlightName
          spotlightRole
          quote
          fromName
          fromRole
          spotlightThumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 425
                  height: 425
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        flsMoments {
          content
          gallery {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1266, height: 600)
              }
            }
          }
        }
      }
    }
  }
`
export default CareersInternalPages
