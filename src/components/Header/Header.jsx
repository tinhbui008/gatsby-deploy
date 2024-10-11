import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import { NavigationSidebar } from "../NavigationSidebar/NavigationSidebar"
import NewsLetter from "../NewsletterForm"
import "./Header.scss"

export function Header({ isHome, bgColour, newsPost, footerRef, notFixed }) {
  const [isOpen, setIsOpen] = useState(false)
  const [newsLetterModal, setNewsLetterModal] = useState(false)

  const headerRef = useRef()
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  function getRectTop(el) {
    var rect = el.getBoundingClientRect()
    return rect.top
  }

  const onScroll = (header, footer, delta) => {
    if (
      getRectTop(header) + document.body.scrollTop + header.offsetHeight >=
      getRectTop(footer) + document.body.scrollTop - 10
    )
      header.style.top = `calc(50% - ${
        getRectTop(header) +
        document.body.scrollTop +
        header.offsetHeight -
        getRectTop(footer) -
        document.body.scrollTop +
        50
      }px)`
    if (
      document.body.scrollTop + window.innerHeight <
      getRectTop(footer) + document.body.scrollTop
    )
      header.style.top = "50%"
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const delta = currPos.y - prevPos.y
      if (headerRef.current && footerRef.current) {
        const header = headerRef.current
        const footer = footerRef.current
        onScroll(header, footer, delta)
      }
    },
    [footerRef, headerRef]
  )
  return (
    <>
      <header
        ref={headerRef}
        style={{ transition: "top 0.5s ease" }}
        className={`${
          isHome ? "bg-dark_blue block lg:fixed" : "hidden lg:block lg:fixed"
        } ${
          notFixed ? "lg:absolute lg:top-[500px]" : "lg:top-1/2"
        } z-20 lg:z-50 lg:left-6 lg:-mt-40  xl:-mt-42 2xl:-mt-40 lg:bg-transparent 2xl:w-[17%] xl:w-[22%]`}
      >
        <div className="logo w-full z-20 lg:hidden p-5">
          <Link to="/" title="Home" className="block">
            <StaticImage
              className="block w-1/3 left-8 top-5"
              src={"../../images/svgs/fls-logo-tagline-blue.svg"}
              alt="FLS Logo"
            />
          </Link>
        </div>
        <div
          className={`navigation-container w-full hidden lg:block !overflow-visible ${
            isOpen ? "flex navigation-container--active" : "hidden lg:flex"
          } `}
        >
          <NavigationSidebar
            bgColour={bgColour}
            isMobile={false}
            newsPost={newsPost}
            setNewsLetterModal={setNewsLetterModal}
          />
        </div>
      </header>
      <button
        onClick={handleToggle}
        className="navigation-toggler lg:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span>Menu</span>
      </button>
      <div
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? "1" : "0",
          transition: "all 0.3s ease",
        }}
        className={`navigation-container w-full lg:hidden fixed z-40 ${
          isOpen ? "navigation-container--active" : " lg:flex"
        } `}
      >
        <NavigationSidebar
          bgColour={bgColour}
          isMobile={true}
          handleToggle={handleToggle}
          setNewsLetterModal={setNewsLetterModal}
        />
      </div>
      <NewsLetter
        backgroundColour={bgColour}
        modalOpen={newsLetterModal}
        setModalOpen={setNewsLetterModal}
      />
    </>
  )
}
