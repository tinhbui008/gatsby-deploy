import React, { useCallback, useEffect, useState } from "react"
import playButton from "../../images/play-button.png"
import { VideoModal } from "../video-component/video"
import "./banner.scss"
function Banner({ banner }) {
  const [show, setShow] = useState(false)
  const [popup, setPopup] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("popup")) {
      setTimeout(() => {
        setShow(JSON.parse(localStorage.getItem("popup")))
      }, 1500)
    } else {
      setTimeout(() => {
        setShow(true)
      }, 1500)
    }
  }, [])
  //   ESC function
  const escFunction = useCallback(event => {
    if (event.key === "Escape") {
      setPopup(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])
  const closePopup = val => {
    setShow(val)
    localStorage.setItem("popup", val)
  }
  return (
    <>
      <div
        className={`banner ${show ? "show" : "hidden"}`}
        id="banner"
        onClick={() => {
          setPopup(true)
          closePopup(false)
        }}
      >
        <img
          className="play-button max-h-16 max-w-full cursor-pointer"
          src={playButton}
          alt="play button"
        />
        <div className="banner-text bg-light_blue flex items-center justify-center">
          <h3 className="text-white whitespace-pre-wrap">{banner.title}</h3>
        </div>
      </div>

      <VideoModal
        videoSrcURL={banner.videoPopup}
        videoTitle={"CEO video"}
        setOpenModal={setPopup}
        popup={popup}
      />
    </>
  )
}

export default Banner
