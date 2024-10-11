import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
// import Swiper core and required modules
import SwiperCore, { Keyboard, Mousewheel, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { CertificateModal } from "../certificate-modal/certificate-modal"
import "./safety-standards.scss"

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard])

function SafetyStandards() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section className="safety-standards my-8 py-10">
      <h1 className="mb-12 text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
        Safety & Quality
      </h1>
      <p className="text-white">
        We are constantly focused to provide services that meet our customer's,
        applicable statutory and regulatory requirements. Through our Quality
        Management System, we enhance customer satisfaction, developing
        processes for continual improvement with the assurance of conformity. We
        have adopted one of the world's leading modular enterprise systems that
        streamlines operations, accounting and business development
      </p>
      <div className="mt-6">
        <div className="mt-4">
          <Link to={"/safety-quality/"} className="read-more">
            Read more{" "}
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },

          1440: { slidesPerView: 4 },
        }}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        className="mySwiper swiper_safety"
      >
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
        <SwiperSlide>
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className="my-12 overflow-hidden shadow-lg  card_safety relative border-2 border-white col-span-3 w-[9rem] h-[10rem] shadow-fls">
              <div className="absolute">
                <StaticImage
                  className="w-12"
                  src={"../../images/white-corner.png"}
                  alt="Curved Corner"
                />
              </div>

              <div className=" flex flex-col items-start absolute bottom-[25%] left-0 ">
                <p className="text-white text-left p-4 text-sm">
                  Name of the certificate
                </p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        {modalOpen && <CertificateModal setOpenModal={setModalOpen} />}
      </Swiper>
    </section>
  )
}

export default SafetyStandards
