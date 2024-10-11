import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./certificate-modal.scss"

export const CertificateModal = ({ setOpenModal, downloadLink }) => {
  return (
    <>
      {" "}
      <div
        className="fixed z-10 inset-0 overflow-y-auto cert-modal"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <button
            onClick={() => {
              setOpenModal(false)
            }}
            type="button"
            className=""
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-60 transition-opacity "
              aria-hidden="true"
            ></div>
          </button>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* modal contents */}
          <div className="inline-block align-bottom text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              <StaticImage src={"../../images/certificate.jpg"} className="" />
            </div>
            {downloadLink ? (
              <a href={downloadLink} target="_blank">
                <div className="flex flex-row mt-4">
                  <StaticImage
                    src={"../../images/download-cloud.png"}
                    className="w-8 mr-4"
                  />
                  <p className="uppercase text-lg text-white">Download</p>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
