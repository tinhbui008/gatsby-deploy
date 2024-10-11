import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { VideoModal } from "../video-component/video"
import "./who-we-are-card.scss"

function WhoWeAreCard() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && (
        <VideoModal
          videoSrcURL="https://www.youtube.com/embed/WC673MZGHR0"
          videoTitle="FLS youtube video"
          setOpenModal={setModalOpen}
        />
      )}
      <section className="card-who-we-are pt-24">
        <h2 className="mb-12 text-white uppercase text-[50px] lg:text-[70px]">
          Who we are
        </h2>

        <div className="card-wrapper shadow border-2 border-gray-200 py-10 xl:py-24 xl:px-8 bg-video-wrap relative">
          <video
            src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4"
            loop
            muted
            autoplay
            autoPlay={true}
          ></video>
          <div className="overlay_video"></div>

          <div className="grid grid-cols-12 flex-row px-4 relative z-10">
            <div className="hidden lg:block col-span-12 lg:col-span-2 col-start-1 mb-8 lg:mb-0">
              <StaticImage
                width={200}
                height={200}
                src={"../../images/who-we-are-photo.png"}
                alt="photo"
                className="shadow rounded-lg w-full md:w-fit"
              />
            </div>
            <div className="col-span-12 lg:col-span-9 lg:ml-8">
              <h3 className="mb-4 lg:text-2xl text-white gotham-bold">
                "We keep the world moving, by deploying the best expertise to
                craft tailor-made solutions that solve the most challenging
                logistic problems all around the world."
              </h3>
              <p className="text-green uppercase text-lg conthrax-bold">
                Torbjörn Larisch
              </p>
              <p className="uppercase text-white text-lg gotham-bold">
                ceo, fls group
              </p>
            </div>
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true)
              }}
            >
              <div className="absolute bottom-[-4rem] right-12">
                <StaticImage
                  className=" w-12"
                  src={"../../images/svgs/play.svg"}
                  alt={"placeholder"}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <Link to={"/who-we-are/"} className="read-more">
            Read more{" "}
          </Link>
        </div>
      </section>
    </>
  )
}

export default WhoWeAreCard
