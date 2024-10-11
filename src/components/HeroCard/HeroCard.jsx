import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "./heroCard.scss"
const HeroCard = ({
  title,
  image,
  logo,
  person,
  role,
  titleSize,
  customClass,
}) => {
  let fontSize = "uppercase text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2.5rem]"
  if (titleSize == "small") {
    fontSize = "uppercase text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2.3rem]"
  }

  return (
    <div className="shadow-md border border-gray-200 flex flex-col md:flex-row md:justify-end card_director bg-trans_white col-span-2 lg:mb-10 xl:mb-0">
      <div className="md:w-[65%]  flex align-center justify-center items-start flex-col lg:relative xl:mr-10 pb-3 px-2 lg:pl-10 xl:pl-20 lg:pb-5">
        {title && (
          <div className="text-area relative mt-6 lg:mt-0 px-3">
            <h2
              className={`${fontSize} text-light_blue uppercase mb-2 py-3 whitespace-pre-wrap`}
            >
              {title}
            </h2>
          </div>
        )}
        {person && (
          <h5
            style={{ fontFamily: "gotham-bold" }}
            className="font-normal text-black pl-3 my-2 md:my-3 lg:my-3 whitespace-pre-wrap uppercase"
          >
            {person} <br />
            {role}
          </h5>
        )}

        <GatsbyImage alt="fls-logo" className="mx-3 my-1 " image={logo} />
      </div>
      <div className={`relative lg:top-[-68px] director ${customClass}`}>
        <GatsbyImage image={image} alt={person} />
      </div>
    </div>
  )
}

export default HeroCard
