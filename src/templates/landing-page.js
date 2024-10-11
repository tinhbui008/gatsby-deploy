import React, { useCallback, useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import WhiteInternalLayout from "../components/white-internal-layout"

const eventDay = "30 November 2023 12:00:00 PM"

const LandingPage = props => {
  // update counter function
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(eventDay).getTime() - new Date().getTime()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days:
          Math.floor(difference / (1000 * 60 * 60 * 24)) < 10
            ? String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
                2,
                "0"
              )
            : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours:
          Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
            ? String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
                2,
                "0"
              )
            : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes:
          Math.floor((difference / 1000 / 60) % 60) < 10
            ? String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0")
            : Math.floor((difference / 1000 / 60) % 60),
        seconds:
          Math.floor((difference / 1000) % 60) < 10
            ? String(Math.floor((difference / 1000) % 60)).padStart(2, "0")
            : Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }, [])

  // check if the countdown is over
  const handleEndCountDown = useCallback(() => {
    const difference = new Date(eventDay).getTime() - new Date().getTime()
    return difference <= 0
  }, [])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [endOfCountdown, setEndOfCountdown] = useState(handleEndCountDown())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
      setEndOfCountdown(handleEndCountDown())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <WhiteInternalLayout title={"BEHIND THE SCENES OF THE WORLD MOVERS"}>
      {!endOfCountdown ? (
        <div className="relative lg:mt-20 mt-5 px-4 lg:h-[80vh] sm:h-[60vh] h-screen flex flex-col justify-start overflow-hidden py-10">
          <StaticImage
            src="../images/landing-page-thumbnail.png"
            className="absolute md:h-auto top-auto max-sm:inset-0 h-auto object-cover"
          />
          <div className="relative z-10 flex flex-col items-center md:block left-0 md:left-1/2 md:-translate-x-1/2 bottom-0 md:bottom-10 w-full md:w-10/12">
            <p className="text-green uppercase conthrax-heavy font-bold text-sm text-center md:text-left">
              Get ready for a huge pulse of energy in
            </p>
            {/* <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">06:15:59:59</p> */}
            <div className="flex flex-col sm:flex-row sm:justify-center">
              <div className="flex flex-col gap-3 items-center">
                <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">
                  {timeLeft.days}
                </p>
                <p className="text-green uppercase conthrax-heavy font-bold text-sm lg:block">
                  Days
                </p>
              </div>
              <p className="text-light_blue font-bold conthrax-heavy hidden md:block leading-[130%] text-[50px] xl:text-[100px]">
                :
              </p>
              {/* <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">:</p> */}
              <div className="flex flex-col gap-3 items-center">
                <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">
                  {timeLeft.hours}
                </p>
                <p className="text-green uppercase conthrax-heavy font-bold text-sm lg:block">
                  Hours
                </p>
              </div>
              <p className="text-light_blue font-bold conthrax-heavy hidden md:block leading-[130%] text-[50px] xl:text-[100px]">
                :
              </p>
              {/* <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">:</p> */}
              <div className="flex flex-col gap-3 items-center">
                <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">
                  {timeLeft.minutes}
                </p>
                <p className="text-green uppercase conthrax-heavy font-bold text-sm hi block xl:translate-x-5">
                  Minutes
                </p>
              </div>
              <p className="text-light_blue font-bold conthrax-heavy hidden md:block leading-[130%] text-[50px] xl:text-[100px]">
                :
              </p>
              {/* <p className="text-light_blue font-bold conthrax-heavy leading-[130%] text-[50px] xl:text-[100px]">:</p> */}
              <div className="flex flex-col gap-3 items-center">
                <p className="text-light_blue font-bold conthrax-heavy leading-[130%] xl:w-[192px] text-[50px] xl:text-[100px]">
                  {timeLeft.seconds}
                </p>
                <p className="text-green uppercase conthrax-heavy font-bold text-sm block">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <iframe
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
            }}
            width="860"
            height="700"
            src="https://www.youtube.com/embed/9fRXZY15Fl8?si=WOWi2HGGZEvcN0GJ"
          ></iframe>
        </div>
      )}
    </WhiteInternalLayout>
  )
}

export default LandingPage
