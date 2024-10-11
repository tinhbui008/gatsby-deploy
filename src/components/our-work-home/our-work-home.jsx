import { withAnimator } from "@arwes/animation"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { forwardRef, useEffect, useRef, useState } from "react"
// import Swiper core and required modules
import SwiperCore, { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { duration, onAnimateEntering, onAnimateExiting } from "../Animated"
import "./our-work-home.scss"

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Mousewheel, Keyboard])

const OurWork = ({ animator, ourWorkData }) => {
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
      <Link to="/our-work">
        <h2 className="mb-12 text-white uppercase text-[24px] md:text-[50px] lg:text-[70px]">
          {ourWorkData?.title}
        </h2>
      </Link>
      <div className="grid grid-cols-12">
        <div className="md:col-span-4 col-span-12">
          <p className="text-white mb-6 font-semibold mt-1 lg:mb-14">
            {ourWorkData?.description}
          </p>

          <p className="text-white mb-6">
            {ourWorkData?.featuredIndustriesText}
          </p>

          <div className="flex flex-col">
            <div>
              <Swiper
                cssMode={true}
                navigation={false}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-10"
                        src={"../../images/svgs/dangerous-goods.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Dangerous goods</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-10"
                        src={"../../images/svgs/feed-and-food.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Food</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-10"
                        src={"../../images/svgs/consumer-goods.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">
                        Consumer<br></br>goods
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/infrastructure.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Infrastructure</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/investment.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Investment</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/mining.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Mining</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <Swiper
                dir="rtl"
                cssMode={true}
                navigation={false}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col ">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/renewable-engergy.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Energy</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/steel.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Steel</p>
                    </div>
                    <div className="flex flex-col ">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/mining.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Mining</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/power.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Power</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/chemicals.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Chemicals</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/mining.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Mining</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col items-center text">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/oil-and-gas.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Oil and Gas</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/power.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Power</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <StaticImage
                        className="w-12"
                        src={"../../images/svgs/raw-materials.svg"}
                        alt={"Placeholder"}
                      />

                      <p className="text-white text-[14px]">Raw Materials</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:ml-8 lg:ml-20 ml-0 mt-8 md:mt-0">
          <p className="text-white mb-8">
            Here are some of our proudest moments:
          </p>

          <div className=" flex-row justify-between  grid grid-cols-6 gap-y-2 gap-x-10">
            {ourWorkData.featuredBlock?.map((ourWork, index) => {
              return (
                <Link
                  key={index}
                  className="gradient-overlay mb-8 overflow-hidden h-auto w-full relative border-2 border-white md:col-span-3 col-span-6 shadow-fls--hover"
                  to={ourWork?.link?.url}
                >
                  <div className=" ">
                    <div className="absolute w-20 xl:w-16 md:w-12 w-18 z-10">
                      <StaticImage
                        src={"../../images/white-corner.png"}
                        alt="Curved Corner"
                      />
                    </div>
                    <GatsbyImage
                      className="w-full"
                      image={getImage(ourWork?.image?.localFile)}
                      alt={ourWork?.title}
                    />
                    <div className=" flex flex-col items-start absolute bottom-0 left-0 p-4 z-10">
                      <h5 className="text-green text-left text-md 2xl:text-xl uppercase">
                        {ourWork?.title}
                      </h5>

                      <div className="mt-1">
                        <div className="read-more">Read more</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const AnimatedOurWork = withAnimator({
  duration,
  onAnimateEntering,
  onAnimateExiting,
})(OurWork)

const OurWorkHome = forwardRef(({ ourWorkData, activate }, ref) => {
  const [size, setSize] = React.useState(window.innerWidth > 1289 ? 130 : 60)
  useEffect(
    () =>
      window.addEventListener("resize", () =>
        setSize(window.innerWidth > 1289 ? 130 : 60)
      ),
    []
  )

  return (
    <section ref={ref} className="our-work-home py-10 lg:my-8 lg:py-10">
      <style>
        {`
        @media screen and (max-width:768px){.our-work-home{display:none!important}}
        `}
      </style>
      <AnimatedOurWork {...{ ourWorkData }} />
    </section>
  )
})

export default OurWorkHome
