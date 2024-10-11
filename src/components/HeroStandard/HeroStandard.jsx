import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function HeroStandard(careersHero) {
  const hero = careersHero.data

  return (
    <>
      <div className="relative mb-10">
        {hero?.heroImage ? (
          <GatsbyImage
            image={getImage(hero?.heroImage?.localFile)}
            alt={hero?.heroText || "Careers at FLS"}
          />
        ) : null}
        <div className="absolute bottom-4 left-0 right-0 p-4 w-full">
          <h2 className="text-white gotham-bold text-[24px] md:text-[36px] lg:text-[44px] xlg:text-[70px]">
            {hero?.heroText}
          </h2>
        </div>
      </div>
    </>
  )
}

export default HeroStandard
