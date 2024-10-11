import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper"
// Import Swiper styles
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseStudyCards from "../case-study-cards/case-study-cards"

// install Swiper modules
SwiperCore.use([Autoplay])

function OurWorks({ ourWorkData, filter, capability, industry }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wp {
        acfOptionsArchives {
          ourWorkPage {
            title
            description
          }
        }
      }
    }
  `)
  const { title, description } = data.wp.acfOptionsArchives.ourWorkPage

  // Load more feature

  // State for the list
  let [list, setList] = useState([...ourWorkData.slice(0, 9)])
  useEffect(() => {
    setList([...ourWorkData.slice(0, 9)])
  }, [ourWorkData])

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(ourWorkData.length > 9)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more ourwork
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < ourWorkData.length
      const nextResults = isMore
        ? ourWorkData.slice(currentLength, currentLength + 9)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < ourWorkData.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <section className="ourwork-section bg-light_blue relative">
      <div className="">
        <div className="main-content">
          <p className="mt-10 mb-4 text-white font-semibold hidden lg:block">
            {description}
          </p>
          <div className="hoz-icon select-none hidden lg:block">
            <p className="text-white mb-7 text-sm">{title}</p>
            <Swiper
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/automotive.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Automotive</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/power.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Power</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/components-and-spare-parts.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Components</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/dangerous-goods.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Dangerous goods</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/feed-and-food.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Food</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-10"
                    src={"../../images/svgs/consumer-goods.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">
                    Consumer<br></br>goods
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/infrastructure.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Infrastructure</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/investment.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Investment</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/mining.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Mining</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/oil-and-gas.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Oil and Gas</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/raw-materials.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Raw Materials</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/renewable-engergy.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Energy</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center">
                  <StaticImage
                    className="w-12"
                    src={"../../images/svgs/steel.svg"}
                    alt={"Placeholder"}
                  />
                  <p className="text-white text-[14px] ">Steel</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="filter-group lg:flex mb-10 mt-9">
            <select
              className=" w-full lg:w-1/2 mb-4 lg:mb-0 mr-8 p-2 bg-light_blue text-white uppercase text-base border cursor-pointer"
              onChange={filter}
              name="capabilties"
            >
              <option className="bg-light_blue " value="all">
                All Capabilities
              </option>
              {capability?.map((item, index) => {
                return (
                  <option
                    className="bg-light_blue "
                    value={item.name}
                    key={index}
                  >
                    {item.name}
                  </option>
                )
              })}
            </select>
            <select
              className="w-full lg:w-1/2 p-2 bg-light_blue text-white uppercase border cursor-pointer"
              onChange={filter}
              name="industries"
            >
              <option className="bg-light_blue " value="all">
                All Industries
              </option>
              {industry?.map((item, index) => {
                return (
                  <option
                    className="bg-light_blue "
                    value={item.name}
                    key={index}
                  >
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-16">
            {list.map((project, index) => {
              return <CaseStudyCards key={index} project={project} />
            })}
          </div>
          {hasMore ? (
            <div className="text-white text-center w-fit mx-auto">
              <button
                className="text-black bg-white p-3 rounded hover:text-light_blue transition-colors	"
                onClick={handleLoadMore}
              >
                Load More...
              </button>
            </div>
          ) : ourWorkData.length === 0 ? (
            <p className="text-center text-white">No results</p>
          ) : (
            <p className="text-center text-white">No more results</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default OurWorks
