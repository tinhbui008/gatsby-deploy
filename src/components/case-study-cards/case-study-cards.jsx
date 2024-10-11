import { Link } from "gatsby"
import React from "react"
import "./case-study-cards.scss"

const CaseStudyCards = ({ project }) => {
  const background =
    project?.featuredImage?.node.localFile.childrenImageSharp[0].fluid?.src
  return (
    <Link
      to={`/our-work/${project?.slug}`}
      className="col-span-1 mb-10 h-auto our-work__item"
    >
      <div
        className="relative h-56 our-work__image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex absolute bottom-3 left-3 right-3 z-10 work__title__title-wrapper">
          <h5 className="our-work__title text-green uppercase text-left text-sm lg:text-base ">
            {project?.ourWork?.projectName}
          </h5>
        </div>

        <div className="overlay"></div>
      </div>
      <div className="image-text flex flex-col items-start">
        <p className="project-desc text-white text-left text-xs lg:text-base mb-5 lg:mb-0 lg:mt-2">
          {project?.ourWork?.projectDescription}
        </p>
      </div>
    </Link>
  )
}

export default CaseStudyCards
