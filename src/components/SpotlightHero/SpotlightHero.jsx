import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import whiteCorner from "../../images/white-corner.png"
import "./spotLight.scss"
function SpotlightHero({ spotlight, whiteLayout, ...props }) {
  return (
    <div
      className={`spotlight-wrapper ${whiteLayout ? "" : "white-arrow"}`}
      {...props}
    >
      <Swiper
        navigation={{
          prevEl: ".prev-spotlight",
          nextEl: ".next-spotlight",
        }}
        pagination={false}
        keyboard={true}
        className={`swiperCareers `}
      >
        {spotlight?.map((hero, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:my-7">
                  <div className="p-1 lg:p-0">
                    <div className="gradient-overlay lg:mb-8 overflow-hidden relative border-2 border-white col-span-3 ">
                      <div className="absolute w-20 xl:w-16 md:w-12 w-18 z-10">
                        <img
                          className="w-full"
                          src={whiteCorner}
                          alt="Curved Corner"
                        />
                      </div>

                      <GatsbyImage
                        image={getImage(hero?.spotlightThumbnail.localFile)}
                        alt={hero.spotlightName}
                      />
                      <div className=" flex flex-col items-start absolute bottom-0 left-0 p-2 pb-8 z-10">
                        <h5 className="conthrax-bold text-green text-left text-lg uppercase">
                          {hero.spotlightName}
                        </h5>

                        <p className="conthrax-bold text-white text-sm relative uppercase ">
                          {hero.spotlightRole}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="spotlight_content">
                    <p className={`${!whiteLayout ? "text-white" : ""} mb-8 `}>
                      {hero.quote}
                    </p>{" "}
                    <p className="text-green uppercase conthrax-bold">
                      {hero.fromName}
                    </p>
                    <p
                      className={`${
                        !whiteLayout ? "text-white" : " "
                      } uppercase mb-8 gotham-bold`}
                    >
                      {hero.fromRole}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="prev-spotlight"></div>
      <div className="next-spotlight"></div>
    </div>
  )
}

export default SpotlightHero
