import { withAnimator } from "@arwes/animation"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import "../../components/who-we-are-card/who-we-are-card.scss"
import { duration, onAnimateEntering, onAnimateExiting } from "../Animated"

const VideoComponent = ({ animator, personalImageGatsby, section }) => {
  const ref = useRef()
  animator.setupAnimateRefs(ref)

  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div ref={ref}>
      <Link to="/who-we-are">
        {" "}
        <h2 className="mb-8 text-white uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]">
          Who we are
        </h2>
      </Link>

      <div className="pb-8 xl:hidden">
        <div className="">
          <p className="mb-4 text-md lg:text-lg text-white gotham-bold">
            {section.content}
          </p>

          <p className="text-green uppercase text-md lg:text-lg conthrax-bold">
            {section.name}
          </p>

          <p className="uppercase text-white text-md lg:text-lg gotham-bold">
            {section.role}
          </p>
        </div>
      </div>
      <div className="card-wrapper shadow border-2 border-gray-200 bg-video-wrap relative w-full h-full">
        {modalOpen && section.video && (
          <div className="modal-video_container absolute w-full h-full z-10">
            <iframe
              className=" absolute w-full h-full"
              src={section.video}
              title={""}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
            <button
              onClick={() => {
                setModalOpen(false)
              }}
              className="text-green uppercase absolute right-1 -bottom-10"
            >
              Close X
            </button>
          </div>
        )}
        <div className="video-wrapper">
          <video
            src="https://fls.saigondigitaldev.com/wp-content/uploads/2022/02/brandfilm_web.mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
        <div className="overlay_video"></div>
        <div className="hidden absolute top-0 bottom-0 px-4 z-5 xl:flex items-center">
          <div className="grid grid-cols-12 flex-row px-4 relative z-5">
            <div className="col-span-2 col-start-1 mb-0">
              <GatsbyImage
                image={getImage(personalImageGatsby)}
                alt={section.title || "Director image"}
                className="shadow rounded-lg md:w-[fit]"
              />
            </div>
            <div className="col-span-9 px-10">
              <p className="mb-4 lg:text-2xl text-white gotham-bold">
                {section.content}
              </p>{" "}
              <p className="text-green uppercase text-md lg:text-lg conthrax-bold">
                {section.name}
              </p>
              <p className="uppercase text-white text-md lg:text-lg gotham-bold">
                {section.role}
              </p>
            </div>
          </div>
        </div>
        <button
          className="openModalBtn absolute bottom-[2rem] right-12 z-2"
          onClick={() => {
            setModalOpen(true)
          }}
        >
          <div className="">
            <StaticImage
              className="w-12"
              src={"../../images/svgs/play.svg"}
              alt="Play icon"
            />
          </div>
        </button>
      </div>
    </div>
  )
}

const ReadMore = ({ animator }) => {
  const ref = useRef()
  animator.setupAnimateRefs(ref)
  return (
    <div className="mt-4" ref={ref}>
      <Link to={"/who-we-are/"} className="block text-white read-more">
        Read more
      </Link>
    </div>
  )
}
const AnimatedVideoComponent = withAnimator({
  duration,
  onAnimateEntering,
  onAnimateExiting,
})(VideoComponent)
const AnimatedReadMore = withAnimator({
  duration,
  onAnimateEntering,
  onAnimateExiting,
})(ReadMore)

const WhoWeAreHome = React.forwardRef(({ data, activate }, ref) => {
  let section = data.wpPage.homepage?.whoWeAre
  let personalImageGatsby = section.personImage?.localFile
  const [inview, setInview] = useState(true)
  useEffect(() => {
    if (activate) {
      setInview(false)
      setTimeout(() => setInview(true), 800)
    }
  }, [activate])
  return (
    <section
      ref={ref}
      className={`card-who-we-are my-8 py-8 pt-20 lg:my-16 lg:py-16`}
    >
      <AnimatedVideoComponent
        animator={{ activate }}
        {...{ personalImageGatsby, section }}
      />
      <AnimatedReadMore animator={{ activate }} />
    </section>
  )
})

export default WhoWeAreHome
