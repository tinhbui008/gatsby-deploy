import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./team-modal.scss"
export const TeamModal = ({ setOpenModal, popupData, modalOpen }) => {
  return (
    <>
      {" "}
      <div
        onClick={() => {
          setOpenModal(false)
        }}
        className="modalBackground fixed inset-0 bg-opacity-85 bg-black flex justify-center items-center z-30"
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? "1" : "0",
          transition: "all 0.3s ease",
        }}
      >
        <div className="modalContainer bg-white py-10 relative w-10/12 lg:w-3/4 max-w-2xl mx-auto rounded ">
          <div className="modal-content container flex flex-col lg:flex-row z-30 mx-auto">
            <div className="flex lg:flex-col lg:w-2/4">
              <div className="person-card relative">
                <div className="absolute w-20 xl:w-16 md:w-12 w-18 z-10">
                  <StaticImage
                    className=""
                    src={"../../images/white-corner.png"}
                    alt="Curved Corner"
                  />
                </div>
                <GatsbyImage
                  className="lg:mb-4 mb-2"
                  image={getImage(popupData.image?.localFile)}
                  alt="Team member"
                />
              </div>

              <div className="titleCloseBtn hidden md:block">
                <button
                  onClick={() => {
                    setOpenModal(false)
                  }}
                  className="text-green uppercase"
                >
                  <svg
                    className="h-6 w-6 text-green inline-block rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Back
                </button>
              </div>
            </div>

            <div className="body flex flex-col lg:w-2/4 lg:pl-8">
              <p className=" text-green uppercase leading-none conthrax-heavy ">
                {popupData?.name}
              </p>
              <p className="mb-8 font-semibold">{popupData?.role}</p>
              <p className="text-sm lg:text-base">{popupData?.content}</p>
              <div className="titleCloseBtn md:hidden mt-2">
                <button
                  onClick={() => {
                    setOpenModal(false)
                  }}
                  className="text-green uppercase"
                >
                  <svg
                    className="h-6 w-6 text-green inline-block rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
