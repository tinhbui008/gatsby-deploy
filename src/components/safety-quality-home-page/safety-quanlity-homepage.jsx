import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { forwardRef, useRef, useState } from "react"
// import Swiper core and required modules
import SwiperCore, { Keyboard, Mousewheel, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "../../components/safety-standards/safety-standards.scss"
import { withAnimationHooks } from "../Animated"

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard])

const Modal = ({ setModalOpen, imageData, downloadLink, modalOpen }) => {
  return (
    <>
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
            className=""
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
              <GatsbyImage
                className=""
                image={getImage(imageData)}
                alt="Certificate"
              />
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

const Component = ({ safeQualityData, animator }) => {
  const ref = useRef()
  animator.setupAnimateRefs(ref)
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDozNw==" }) {
        slug
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
  `)
  const [modalOpen, setModalOpen] = useState(false)
  const [keyModal, setKeyModal] = useState(0)
  const certificates = data.wpPage.template.safetyQualityStandards?.certificates
  return (
    <div ref={ref} className="s-container">
      <Link to="/safety-quality/">
        <h2 className="mb-8 text-white uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]">
          {safeQualityData.title}
        </h2>
      </Link>

      <p className="text-white font-semibold">{safeQualityData.description}</p>

      <div className="my-4">
        <Link to={"/safety-quality/"} className="read-more">
          Read more
        </Link>
      </div>

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
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper swiper_safety slider-white-layout"
      >
        {certificates.map((cert, index) => {
          return (
            <div className="my-4" key={index}>
              <SwiperSlide key={index}>
                <button
                  id={index}
                  className="openModalBtn "
                  onClick={() => {
                    setModalOpen(true)
                    setKeyModal(index)
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${cert.certificateThumbnail?.sourceUrl})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="overflow-hidden shadow-lg card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] mx-2 shadow-fls--hover"
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
            </div>
          )
        })}

        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          imageData={certificates[keyModal].certificateImage?.localFile}
          downloadLink={
            certificates[keyModal].certificatePdfDownload?.localFile?.url
          }
        />
      </Swiper>
    </div>
  )
}

const AnimatedSection = withAnimationHooks(Component)

const SafetyQualityHome = forwardRef(({ safeQualityData, activate }, ref) => {
  return (
    <section
      ref={ref}
      className="safety-standards my-8 py-8 pt-18 lg:my-16 lg:py-16"
      // style={{ display: "flex", justifyContent: "center" }}
    >
      <AnimatedSection {...{ animator: { activate }, safeQualityData }} />
    </section>
  )
})

export default SafetyQualityHome
