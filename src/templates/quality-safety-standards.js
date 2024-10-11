import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import "../components/safety-standards/safety-standards.scss"
import "../styles/swiper-arrow.scss"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"

const SafetyQuality = ({ data }) => {
  let page = data.wpPage
  let certificates = page.template.safetyQualityStandards.certificates

  const [modalOpen, setModalOpen] = useState(false)
  const [keyModal, setKeyModal] = useState(0)

  return (
    <>
      <WhiteInternalLayout title={page.title}>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <section className="safety-standards_single px-auto">
          <div
            className="rich-text-editor"
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>

          <Swiper
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            className="mySwiper swiper_safety white-layout"
          >
            {certificates.map((cert, index) => {
              return (
                <SwiperSlide key={index}>
                  <button
                    id={index}
                    className="openModalBtn"
                    onClick={() => {
                      setModalOpen(true)
                      setKeyModal(index)
                    }}
                  >
                    <div
                      style={{
                        transition: "box-shadow 0.2s ease",
                        backgroundImage: `url(${cert.certificateThumbnail?.sourceUrl})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="shadow-xl hover:shadow-[#093e69cb] overflow-hidden card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] mx-2"
                    >
                      <div className="absolute inset-0 bg-light_blue/90"></div>
                      <div className="absolute">
                        <StaticImage
                          className="w-12"
                          src={"../../images/white-corner.png"}
                          alt="Curved Corner"
                        />
                      </div>

                      <div className=" flex flex-col justify-center absolute left-0">
                        <p className="text-white text-left p-4 text-sm">
                          {cert.certificateName}
                        </p>
                      </div>
                    </div>
                  </button>
                </SwiperSlide>
              )
            })}
            {/* 1. move modal outside Swipper
                2. when Click each certificate we will get index of it and set new value for "keyModal" state. (see line 102)
                3. use "keyModal" state to get exact item in "certificates" Array. 
            */}

            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              imageData={certificates[keyModal].certificateImage?.localFile}
              downloadLink={
                certificates[keyModal].certificatePdfDownload?.localFile?.url
              }
            />
          </Swiper>
        </section>
      </WhiteInternalLayout>
    </>
  )
}

export default SafetyQuality

const Modal = ({ setModalOpen, imageData, downloadLink, modalOpen }) => {
  const image = imageData

  return (
    <>
      {" "}
      <div
        className="fixed z-10 inset-0 overflow-y-auto cert-modal"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? "1" : "0",
          transition: "all 0.2s ease",
        }}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <button
            onClick={() => {
              setModalOpen(false)
            }}
            type="button"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity "
              aria-hidden="true"
            ></div>
          </button>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              <GatsbyImage image={getImage(image)} alt="Certificate" />
            </div>
            {downloadLink ? (
              <a href={downloadLink} target="_blank">
                <div className="flex flex-row mt-4">
                  <StaticImage
                    src={"../../images/download-cloud.png"}
                    className="w-8 mr-4"
                    alt="Download icon"
                  />
                  <p className="uppercase text-lg text-white">Download</p>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      content
      slug
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
      template {
        ... on WpTemplate_QualitySafetyStandards {
          templateName
          safetyQualityStandards {
            certificates {
              certificatePdfDownload {
                localFile {
                  url
                }
              }
              certificateImage {
                uri
                title
                slug
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 700, height: 900)
                  }
                }
              }
              certificateThumbnail {
                slug
                title
                uri
                sourceUrl
              }
              certificateName
            }
          }
        }
      }
    }
  }
`
