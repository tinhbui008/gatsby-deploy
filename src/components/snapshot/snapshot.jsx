import React from "react"
import SwiperCore, { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "./snapshot.scss"

SwiperCore.use([Autoplay, Navigation, Mousewheel, Keyboard])

const SnapShot = ({ snapshot }) => (
  <section className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]">
    <div className="mb-8">
      <h3 className="text-light_blue lg:text-3xl mb-4 uppercase">
        {snapshot.title}
      </h3>
      <p>{snapshot.description}</p>
    </div>
    <div className="fls-snapshot">
      <Swiper
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper swiper_snapshot"
      >
        {snapshot.snapshotSlider?.map((snapItem, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex flex-col justify-center align-center text-center p-6 min-h-[220px] w-[220px]">
                <div className="mb-4">
                  <h3 className="text-white text-xl lg:text-2xl uppercase">
                    {snapItem?.title}
                  </h3>
                </div>
                <div>
                  <h3 className="text-white text-sm uppercase gotham-bold">
                    {snapItem?.description}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="prev "></div>
      <div className="next "></div>
    </div>
  </section>
)

export default SnapShot
