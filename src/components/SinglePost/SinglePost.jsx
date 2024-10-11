import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import "./singlePost.scss"

function SinglePost({ postData }) {
  const image = getImage(postData?.featuredImage?.node.localFile)

  return (
    <>
      <Link
        to={`/news/${postData?.slug}`}
        className={`col-span-1 mb-6 h-auto card relative post-item flex flex-col`}
      >
        <div className="absolute inset-0 bg-slate-900 z-[1] opacity-50 lg:hidden"></div>
        <div className="static lg:relative post-image h-full">
          <GatsbyImage className="w-full" image={image} alt={postData?.title} />
        </div>
        <div className="z-[2] mt-auto absolute lg:static w-full bottom-0 left-0">
          {postData?.date && (
            <p className="text-neutral-300 lg:my-2 pl-[1rem] lg:pl-0">
              {postData?.date}
            </p>
          )}
          {postData?.title && (
            <div className="image-text z-10">
              {" "}
              <h5 className="post-title text-white uppercase text-left text-sm lg:text-base text-ellipsis overflow-hidden">
                {postData?.title}
              </h5>
            </div>
          )}

          {postData?.excerpt && <div
            className="excerpt text-white text-left text-xs lg:text-base mb-5 lg:mb-0 lg:mt-2  text-ellipsis overflow-hidden leading-6 "
            dangerouslySetInnerHTML={{ __html: postData?.excerpt }}
          ></div>}
        </div>
      </Link>
    </>
  )
}
export default SinglePost
