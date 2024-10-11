import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
// import Swiper core and required modules
import SwiperCore, { Keyboard, Mousewheel, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "./contact-white-bg.scss"
import Offices from "./Offices"
// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Keyboard])

const ContactWhiteBg = ({ contact }) => {
  let [location, setLocation] = useState("Thailand")

  // get all offices from WP
  let offices = contact.contact.offices.offices // confused acf field name!

  // delete duplicate office location.
  const uniqueLocation = offices.reduce((acc, current) => {
    const x = acc.find(item => item.location === current.location)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])

  // filter office by location
  let currentOffice = offices.filter(office => {
    return office.location === location
  })

  // handle change location

  const onChange = e => {
    setLocation(e.target.value)
  }

  return (
    <section className="contact my-8">
      <div className="grid grid-cols-12 order-1">
        <div
          className="col-span-12 rich-text-editor"
          dangerouslySetInnerHTML={{
            __html: contact?.content,
          }}
        ></div>
        <div className="radio bg-transparent col-span-12 flex flex-row">
          <ul className=" m-8  mx-auto flex flex-row flex-wrap">
            {uniqueLocation?.map((office, index) => {
              return (
                <Offices
                  key={index}
                  office={office}
                  onChange={onChange}
                  location={location}
                  textColor="black"
                />
              )
            })}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 hidden lg:flex order-3 md:order-2 mt-6">
          <div className="mr-8 max-w-[22rem]">
            <GatsbyImage
              image={getImage(currentOffice[0]?.map?.localFile)}
              alt={contact?.title}
            />
          </div>
        </div>

        {currentOffice.map((office, index) => {
          return (
            <div key={index} className="office order-2 md:order-6">
              <div className="mb-8 mt-6">
                {office?.officeName && (
                  <p className="uppercase text-green font-semibold mb-6 conthrax-bold">
                    {office?.officeName}
                  </p>
                )}
                {office.mapUrl && office.latLong && (
                  <a
                    href={office?.mapUrl}
                    target="_blank"
                    className="text-black text-bold gotham-bold"
                  >
                    {office?.latLong}
                  </a>
                )}
                {office.mapUrl && (
                  <a
                    href={office?.mapUrl}
                    target="_blank"
                    className="text-black block gotham-book"
                  >
                    <strong className="text-bold gotham-bold">Address:</strong>{" "}
                    {office?.address}
                  </a>
                )}
                {office.phoneNumber && (
                  <p className="text-black">
                    <strong className="text-bold gotham-bold">Tel:</strong>{" "}
                    {office?.phoneNumber}
                  </p>
                )}
                {office?.email && (
                  <p className="text-black">
                    <strong className="text-bold gotham-bold">Email:</strong>{" "}
                    {office?.email}
                  </p>
                )}
              </div>
              {office?.personImage && (
                <div className="mr-4">
                  <GatsbyImage
                    image={getImage(office?.personImage?.localFile)}
                    className="mb-6 md:mb-0 border rounded-xl border-white shadow-fls w-20"
                    alt={office?.officeName}
                  />
                </div>
              )}
              <div className="mb-6  flex flex-row">
                <div>
                  {office?.person && (
                    <p className="text-green uppercase font-semibold conthrax-bold">
                      {office?.person}
                    </p>
                  )}
                  {office?.role && (
                    <p className="uppercase font-semibold gotham-bold">
                      {office?.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ContactWhiteBg
