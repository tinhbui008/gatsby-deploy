import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
//Swipper libary
import { Swiper, SwiperSlide } from "swiper/react"
// custom Swpier
import "./Gallery.scss"

SwiperCore.use([FreeMode, Navigation, Thumbs])

function Gallery({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className="gallery">
      <Swiper
        spaceBetween={0}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="slide-swiper-container mt-12 slider-white-layout big-slider"
        modules={[FreeMode, Navigation, Thumbs]}
        autoHeight={false}
        cssMode={true}
      >
        {gallery?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full">
                <GatsbyImage
                  className="w-full"
                  image={getImage(image?.localFile)}
                  alt="Slider image"
                />
              </div>
            </SwiperSlide>
          )
        })}
        <div className="slider-overlay"></div>
        <div className="prev"></div>
        <div className="next"></div>
      </Swiper>
      <Swiper
        style={{
          maxHeight: "120px",
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper my-4 ml-0 mr-auto"
      >
        {gallery?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <GatsbyImage
                image={getImage(image?.localFile)}
                alt="Slider image"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Gallery
