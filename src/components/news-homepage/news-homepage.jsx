import { withAnimator } from "@arwes/animation"
import { Link } from "gatsby"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import { duration, onAnimateEntering, onAnimateExiting } from "../Animated"
import SinglePost from "../SinglePost/SinglePost"
import "./news-homepage.scss"

const NewsHomepage = ({ newsHomeData, animator }) => {
  const newsData = newsHomeData?.newsPicker
  const updateData = newsHomeData?.newsPicker2
  const ref = useRef()
  animator.setupAnimateRefs(ref)
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (animator.animate) {
      setDisabled(false)
      setTimeout(() => setDisabled(true), 1000)
    }
  }, [animator])
  return (
    <section ref={ref} className="news-home my-8 py-8 pt-18 lg:my-16 lg:py-16">
      <Link to="/news">
        <h2 className="mb-8 text-white uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]">
          News
        </h2>
      </Link>

      <p className="text-white font-semibold my-8">
        We are constantly pushing ourselves to reach greater heights. Here are
        our most recent achievements.
      </p>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="mb-8">
            <h5 className="text-white solid-line__white conthrax-heavy uppercase text-sm">
              <span>Latest news</span>
            </h5>

            <p className="text-white">Find out what's new with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2 md:gap-x-4 lg:gap-x-16">
            <SinglePost postData={newsData[0]} />
            <SinglePost postData={newsData[1]} />
            <SinglePost postData={newsData[2]} />
          </div>
          <div className="mt-4">
            <div className="mt-4">
              <Link to={"/news/"} className="read-more">
                Read more
              </Link>
            </div>
          </div>
          {/* <div className="my-8">
            <h5 className="text-white solid-line-2 conthrax-heavy uppercase text-sm">
              <span>Industry Updates</span>
            </h5>
            <p className="text-white">
              Find out whats new in the world of supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2 md:gap-x-4 lg:gap-x-16">
            <SinglePost postData={updateData[0]} />
            <SinglePost postData={updateData[1]} />
            <SinglePost postData={updateData[2]} />
          </div>
          <div className="mt-4">
            <Link to={"/news/"} className="read-more">
              Read more{" "}
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}
const NewsAnimated = withAnimator({
  duration,
  onAnimateEntering,
  onAnimateExiting,
})(NewsHomepage)

const NewsAnimatedHome = forwardRef(({ activate, newsHomeData }, ref) => {
  return (
    <div ref={ref}>
      <NewsAnimated {...{ newsHomeData }} />
    </div>
  )
})
export default NewsAnimatedHome
