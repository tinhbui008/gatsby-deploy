import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useSnapshot } from "valtio"
import BlueCorner from "../../../images/blue-corner.png"
import { closePanel, state } from "../../../store"
import "./CapabilityOverlay.scss"

/**
 * This component is where you put all your regular React stuff
 * It will get shown above the webgl canvas because we are using position fixed
 *
 * Valtio is used to get the current selected office. This is where we get the data
 * like name, address. any images etc
 */
const CapabilityOverlay = ({ globalCapability }) => {
  const snap = useSnapshot(state)

  return snap.selectedCapability ? (
    <div
      className="capability-block-container "
      onClick={() => {
        closePanel()
      }}
    >
      <div className="office-block-overlay"></div>

      <div className="capability-container pt-0 lg:pt-24 m-auto">
        <div className="container mx-auto px-12 lg:pr-8 lg:pl-[12rem] xl:pr-[12rem]">
          <div className="capability-block">
            <div className="flex mb-5 items-center">
              {/* <span className="block mr-5 bg-green w-14 h-14 rounded-full "></span> */}
              <div className="ring-container">
                <div className="ringring"></div>
                <div className="circle"></div>
              </div>
              <h3 className="text-white text-2xl lg:text-4xl">
                {" "}
                {globalCapability?.title}
              </h3>
            </div>
            <div className="card-wrapper bg-[#0017288a] lg:bg-transparent overflow-hidden shadow border-2 border-gray-200 grid grid-cols-12 flex-row py-12 px-4 lg:px-8 relative">
              <img
                className="top-0 left-0 absolute w-12"
                src={BlueCorner}
                alt="Curved Corner"
              />
              <div className="flex flex-col justify-end col-span-12 lg:col-span-6 px-6">
                <h4 className="mb-12 text-white text-lg lg:text-2xl uppercase">
                  {" "}
                  {globalCapability?.description}
                </h4>
                <div className="mb-4">
                  <a
                    className="text-white text-sm relative pb-1 border-b-2 border-green font-[gotham-bold]"
                    href={snap.selectedCapabilityData.url}
                  >
                    Learn more
                  </a>
                </div>
                <div>
                  <button
                    className="text-green font-bold py-2 uppercase"
                    onClick={() => {
                      closePanel()
                    }}
                  >
                    Close X
                  </button>
                </div>
              </div>
              <div className="hidden xl:block col-span-12 lg:col-span-6 px-6 col-start-1 mb-8 lg:mb-0">
                <GatsbyImage
                  alt="Capability FLS"
                  image={getImage(globalCapability?.image?.localFile)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default CapabilityOverlay
