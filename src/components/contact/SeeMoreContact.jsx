import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import { withAnimationHooks } from "../Animated"

const Image = ({ contactData, animator, textColour }) => {
  const ref = useRef()
  animator.setupAnimateRefs(ref)
  return (
    <div className="mb-6  flex flex-row">
      <div className="mr-4">
        <GatsbyImage
          image={getImage(contactData[0]?.personImage?.localFile)}
          className="mb-6 md:mb-0 border rounded-xl border-white shadow-fls w-20"
          alt={contactData[0]?.officeName}
        />
      </div>

      <div>
        <p className="text-green uppercase font-semibold conthrax-bold">
          {contactData[0]?.person}
        </p>

        <p className={` ${textColour} uppercase font-semibold gotham-bold `}>
          {contactData[0]?.role}
        </p>
      </div>
    </div>
  )
}

const AnimatedImage = withAnimationHooks(Image)

function SeeMoreContact({ contactData, bgColour, ref }) {
  let [showMore, setshowMore] = useState(false)
  let textColour = "text-white"
  if (bgColour === "white") {
    textColour = ""
  }

  return (
    <>
      <div ref={ref} className="col-span-12 md:col-span-6 order-2 md:order-2">
        <div className="mb-8 mt-6">
          <p className="uppercase text-green font-semibold mb-6 conthrax-bold">
            {contactData[0]?.officeName}
          </p>

          <p className={` ${textColour} font-semibold gotham-bold `}>
            13.090, 100.917
          </p>

          <p className={`${textColour}`}>
            <strong className="text-bold gotham-bold">Address:</strong>{" "}
            {contactData[0]?.address}
          </p>

          <p className={`${textColour}`}>
            <strong className="gotham-bold">Tel:</strong>{" "}
            {contactData[0]?.phoneNumber}
          </p>

          <p className={`${textColour}`}>
            <strong className="gotham-bold">Email:</strong>{" "}
            {contactData[0]?.email}
          </p>
        </div>
        <div className="mb-6  flex flex-row">
          <div className="mr-4">
            <GatsbyImage
              image={getImage(contactData[0]?.personImage?.localFile)}
              className="mb-6 md:mb-0 border rounded-xl border-white shadow-fls w-20"
              alt={contactData[0]?.officeName}
            />
          </div>

          <div>
            <p className="text-green uppercase font-semibold conthrax-bold">
              {contactData[0]?.person}
            </p>

            <p
              className={` ${textColour} uppercase font-semibold gotham-bold `}
            >
              {contactData[0]?.role}
            </p>
          </div>
        </div>
        <div className="">
          {/* 
          <p className="text-green uppercase font-semibold conthrax-bold">
            {contactData[0].location} Office
          </p> */}
          {!showMore && (
            <p
              className="text-green uppercase font-semibold conthrax-bold mt-5 p-1 cursor-pointer underline w-fit"
              onClick={() => {
                setshowMore(true)
              }}
            >
              See more...
            </p>
          )}
        </div>
      </div>
      {showMore &&
        contactData.slice(1).map(office => {
          return (
            <>
              <div className="col-span-12 md:col-span-6 order-2 md:order-3"></div>
              <div className="col-span-12 md:col-span-6 order-2 md:order-3">
                <div className="mb-8 mt-6">
                  <p className="uppercase text-green font-semibold mb-6 conthrax-bold">
                    {office?.officeName}
                  </p>

                  <p className={` ${textColour} font-semibold gotham-bold `}>
                    13.090, 100.917
                  </p>

                  <p className={`${textColour}`}>
                    <strong className="text-bold gotham-bold">Address:</strong>{" "}
                    {office?.address}
                  </p>

                  <p className={`${textColour}`}>
                    <strong className="gotham-bold">Tel:</strong>{" "}
                    {office?.phoneNumber}
                  </p>

                  <p className={`${textColour}`}>
                    <strong className="gotham-bold">Email:</strong>{" "}
                    {office?.email}
                  </p>
                </div>
                <div className="mb-6  flex flex-row">
                  <div className="mr-4">
                    <GatsbyImage
                      image={getImage(office?.personImage?.localFile)}
                      className="mb-6 md:mb-0 border rounded-xl border-white shadow-fls w-20"
                      alt={office?.officeName}
                    />
                  </div>

                  <div>
                    <p className="text-green uppercase font-semibold conthrax-bold">
                      {office?.person}
                    </p>
                    <p
                      className={` ${textColour} uppercase font-semibold gotham-bold `}
                    >
                      {office?.role}
                    </p>
                  </div>
                </div>
                <div className="">
                  {/* 
                  <p className="text-green uppercase font-semibold conthrax-bold">
                    {office.location} Office
                  </p> */}

                  <p
                    className="text-green uppercase font-semibold conthrax-bold mt-5 cursor-pointer underline"
                    onClick={() => {
                      setshowMore(false)
                    }}
                  >
                    Hide
                  </p>
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}

export default SeeMoreContact
