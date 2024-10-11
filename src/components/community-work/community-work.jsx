import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const CommunityWork = ({ communityData, sponsorshipData }) => (
  <section
    id="community-work"
    className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]"
  >
    <div className="mb-8">
      <h3 className="text-light_blue uppercase mb-4 lg:text-3xl">
        {communityData?.title}
      </h3>
      <p>{communityData?.description}</p>
    </div>

    <div className="mb-8">
      {communityData?.communityWorkItem.map((node, index) => {
        return (
          <div key={index} className="pb-10 lg:pb-20">
            <h4 className="text-light_blue mb-4 uppercase lg:text-2xl">
              {node?.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {node?.description && <p
                className="pr-4 mb-6 lg:mb-0 text-base lg:pr- rich-text-editor"
                dangerouslySetInnerHTML={{
                  __html: node?.description,
                }}
              ></p>}

              <div className="flex flex-col">
                <GatsbyImage
                  image={getImage(node?.image.localFile)}
                  alt={node.title || "Comunity image"}
                />
              </div>
            </div>
            <div className="mt-6">
              {node.facebookLink ? (
                <a href={node.facebookLink} target="_blank">
                  <StaticImage
                    src="../../images/svgs/facebook-blue.svg"
                    className="w-8 mr-5"
                    alt="facebook icon"
                  />
                </a>
              ) : null}
              {node.websiteLink ? (
                <a href={node.websiteLink} target="_blank">
                  <StaticImage
                    src="../../images/globe-icon.png"
                    className="w-8"
                    alt="Global icon"
                  />
                </a>
              ) : null}
            </div>
          </div>
        )
      })}

      <div>
        <h4 className="text-light_blue lg:text-2xl mb-4 uppercase">
          {sponsorshipData?.title}
        </h4>
        <p className="mb-6">{sponsorshipData?.description}</p>
      </div>
      <div className="grid grid-cols-2">
        {sponsorshipData.contentPicker?.map((post, index) => {
          return (
            <Link
              to={`/news/${post.slug}`}
              className="col-span-2 md:col-span-1 flex flex-col md:flex-row mb-4 md:mb-0"
              key={index}
            >
              <GatsbyImage
                image={getImage(post.featuredImage?.node.localFile)}
                className="mb-4 lg:-mg-0 sm:w-[10rem]  border border-white"
                alt={post.title || "Comunity image"}
              />
              <div className="lg:ml-4 md:max-w-[10rem] w-full">
                <h4 className="text-base gotham-book font-normal">
                  {post.title}
                </h4>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CommunityWork
