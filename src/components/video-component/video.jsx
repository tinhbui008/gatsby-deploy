import React from "react"
import "./video.scss"
export const VideoModal = ({
  setOpenModal,
  videoSrcURL,
  videoTitle,
  popup,
}) => {
  return (
    <>
      <div
        style={{
          visibility: popup ? "visible" : "hidden",
          opacity: popup ? "1" : "0",
          transition: "all 0.6s ease",
        }}
        className="video-modal modalBackground w-[100vw] h-[100vh] bg-[#0f0d0d9d] fixed justify-center items-center top-0 right-0 z-[1000]"
        onClick={() => {
          setOpenModal(false)
        }}
      >
        <div className="modal-video_container">
          <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
          <button
            onClick={() => {
              setOpenModal(false)
            }}
            className="text-green uppercase"
          >
            Close X
          </button>
        </div>
      </div>
    </>
  )
}
