import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { useSnapshot } from "valtio"
import { closePanel, state } from "../../../store"
import "./Office.scss"

/**
 * This component is where you put all your regular React stuff
 * It will get shown above the webgl canvas because we are using position fixed
 *
 * Valtio is used to get the current selected office. This is where we get the data
 * like name, address. any images etc
 */

const Office = ({ globalOffice }) => {
  const snap = useSnapshot(state)

  return snap.selectedOfficeId ? (
    <div
      className="office-block-container xl:flex"
      onClick={() => {
        closePanel()
      }}
    >
      <div className="office-block-overlay"></div>
      <div className="office-block">
        <div className="mx-auto -mt-36 lg:mt-0">
          <div className="flex">
            <div className="pr-8 flex flex-col justify-end xl:w-6/12 ">
              <div className="mb-6">
                {globalOffice?.title ? (
                  <div className="text-green uppercase text-sm xl:text-lg mb-3">
                    {globalOffice?.title}
                  </div>
                ) : null}

                <a
                  href={globalOffice?.mapUrl}
                  target="_blank"
                  className="text-white text-xs gotham-bold block"
                >
                  {Number(globalOffice?.lat).toFixed(3)},{" "}
                  {Number(globalOffice?.long).toFixed(3)}
                </a>

                {globalOffice?.address ? (
                  <a
                    href={globalOffice?.mapUrl}
                    target="_blank"
                    className="text-white text-xs gotham-bold"
                  >
                    Address:{" "}
                    <span className="text-white/90 gotham-book">
                      {globalOffice?.address}
                    </span>{" "}
                  </a>
                ) : null}

                {globalOffice?.telephone ? (
                  <a
                    href={globalOffice?.telephone}
                    className="block text-white text-xs gotham-bold"
                  >
                    Tel:{" "}
                    <span className="text-white/90 gotham-book ">
                      {globalOffice?.telephone}
                    </span>
                  </a>
                ) : null}
              </div>

              <div className="pb-6 hidden xl:block">
                {globalOffice?.highlightedProjects ? (
                  <div className="text-white mb-3 uppercase">
                    Highlighted Projects
                  </div>
                ) : null}

                <div className="flex">
                  <div className="pr-2">
                    {globalOffice?.highlightedProjects ? (
                      <Link
                        to={`/our-work/${globalOffice?.highlightedProjects[0]?.slug}`}
                      >
                        <GatsbyImage
                          alt="Office FLS"
                          image={getImage(
                            globalOffice?.highlightedProjects[0]?.featuredImage
                              ?.node?.localFile
                          )}
                        />
                      </Link>
                    ) : null}
                  </div>
                  <div className="">
                    {globalOffice?.highlightedProjects ? (
                      <Link
                        to={`/our-work/${globalOffice?.highlightedProjects[1]?.slug}`}
                      >
                        <GatsbyImage
                          alt="Office FLS"
                          image={getImage(
                            globalOffice?.highlightedProjects[1]?.featuredImage
                              ?.node?.localFile
                          )}
                        />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:block w-6/12">
              <div className="flex mb-2 px-5">
                {globalOffice?.personAvatar ? (
                  <div className="pr-2">
                    <GatsbyImage
                      alt="Office FLS"
                      className="rounded glow-border"
                      image={getImage(globalOffice?.personAvatar?.localFile)}
                    />
                  </div>
                ) : null}

                <div className="flex flex-col justify-end">
                  {globalOffice?.person ? (
                    <div className="text-green uppercase text-xs mb-2">
                      {globalOffice?.person}
                    </div>
                  ) : null}

                  <div className="text-white uppercase text-xs gotham-bold font-semibold">
                    {globalOffice?.personRole}
                  </div>
                </div>
              </div>
              {globalOffice?.map ? (
                <div className="">
                  <img src={globalOffice?.map?.sourceUrl} alt="Map" />
                </div>
              ) : null}
            </div>
          </div>
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
    </div>
  ) : null
}

export default Office
