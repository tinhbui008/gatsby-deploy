import { graphql, navigate } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
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
import MobileSocial from "../components/MobileSocial/MobileSocial"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"

SwiperCore.use([Navigation, Mousewheel, Keyboard])
const OurProject = ({ data }) => {
  if (!data) return null
  let project = data.wpOurWork
  return (
    <>
      <WhiteInternalLayout title={project?.title} newsPost={true}>
        <Seo
          title={data.wpOurWork.seo?.title}
          description={data.wpOurWork.seo?.metaDesc}
          featuredImage={
            data.wpOurWork.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <section className="our-work-single">
          <div className="menu"></div>

          <div className=" grid grid-cols-12 flex-col ">
            <h2
              className="text-green font-semibold text-lg col-span-12 hidden lg:block mb-9 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              &lt; BACK
            </h2>
            <div className="single-card shadow-md shadow-white max-w-sm md:max-w-3xl md:max-h-96 col-span-12 lg:col-span-10 relative mb-4">
              <div className="absolute w-16 left-0 top-0 z-30">
                <StaticImage
                  src={"../images/blue-corner.png"}
                  alt="blue-corner"
                />
              </div>
              <div className="full-width-slider z-20">
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
                  {project?.ourWork?.gallery?.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <GatsbyImage
                          image={getImage(image.localFile)}
                          alt={image.title}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <div className="slider-overlay"></div>
                <div className="prev"></div>
                <div className="next"></div>
              </div>
            </div>
            <div className="meta-details  col-span-2 lg:flex flex-col pl-2  hidden ">
              <aside>
                {project?.ourWork?.clientName ? (
                  <div className="mb-8">
                    <h6 className="text-green text-lg gotham-bold">Client</h6>
                    <p className=" gotham-book text-sm">
                      {project.ourWork.clientName}
                    </p>
                  </div>
                ) : null}

                {project?.ourWork?.year && (
                  <div className="mb-8">
                    <h6 className="text-green text-lg gotham-bold">Year</h6>
                    <p className=" gotham-book text-sm">
                      {project.ourWork.year}
                    </p>
                  </div>
                )}
                {project?.ourWork?.location && (
                  <div>
                    <h6 className="text-green text-lg gotham-bold">Location</h6>
                    <p className=" gotham-book text-sm">
                      {project.ourWork.location}
                    </p>
                  </div>
                )}
              </aside>
            </div>
            <div className="col-span-12 lg:col-span-10 text-left py-10 mb-10">
              {project.title && (
                <h5 className="mb-4  uppercase text-xl gotham-bold  lg:border-green lg:border-b-4 inline-block lg:pb-[5px]">
                  {project.title}
                </h5>
              )}
              {project.ourWork?.projectDescription && (
                <div className="  mb-4">
                  <p className="font-bold text-md">
                    {project.ourWork.projectDescription}
                  </p>
                </div>
              )}
              {project?.content && (
                <div
                  className=" ourwork-single rich-text-editor"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                ></div>
              )}
            </div>
            <div className=" col-span-12 mt-11 lg:hidden">
              <div
                className="text-green font-semibold text-lg mb-2"
                onClick={() => navigate(-1)}
              >
                BACK
              </div>
            </div>
          </div>
          <MobileSocial className="pb-8 pr-8" />
        </section>
      </WhiteInternalLayout>
    </>
  )
}
export const query = graphql`
  query ($slug: String!) {
    wpOurWork(slug: { eq: $slug }) {
      title
      content
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
      ourWork {
        projectName
        projectDescription
        year
        clientName
        location
        gallery {
          title
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                height: 500

                placeholder: BLURRED
                transformOptions: { fit: FILL, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
export default OurProject
