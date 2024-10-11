import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import "./NewsSidebar.scss"
export function NewsSidebar({ whiteButton }) {
  const data = useStaticQuery(graphql`
    query {
      wp {
        siteSettings {
          siteSettings {
            newsSidebarContentPicker1 {
              ... on WpPost {
                slug
                excerpt
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 157
                          height: 126
                          layout: FULL_WIDTH
                        )
                      }
                    }
                  }
                }
              }
            }
            newsSidebarContentPicker2 {
              ... on WpPost {
                slug
                excerpt
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 157
                          height: 126
                          layout: FULL_WIDTH
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const newsData = data.wp.siteSettings.siteSettings?.newsSidebarContentPicker1
  const updateData =
    data.wp.siteSettings.siteSettings?.newsSidebarContentPicker2
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle_news = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button
        onClick={handleToggle_news}
        className={`news-toggler ${isOpen ? "news-tab_margin" : ""} ${
          whiteButton ? "bg-white" : "bg-light_blue"
        }`}
        aria-controls="news-tab"
        aria-expanded="false"
      >
        <span
          className={`text[16px] ${
            whiteButton ? "text-light_blue" : "text-white"
          }`}
        >
          News
        </span>
        <div className="absolute w-[16px]  top-[-10px] left-[-3rem] rotate-90">
          <StaticImage
            src={"../../images/three-triangles.png"}
            alt="three triangles"
          />
        </div>
      </button>

      <div
        style={{
          zIndex: isOpen ? 1 : -1,
          opacity: isOpen ? "1" : "0",
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.5s ease",
        }}
        className="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>

      <div
        className={`news-container w-full relative `}
        style={{
          zIndex: isOpen ? 100 : -1,
          opacity: isOpen ? "1" : "0",
          transition: "all 0.2s ease",
        }}
      >
        <div
          style={{
            opacity: isOpen ? "1" : "0",
            zIndex: isOpen ? 100 : -1,
            transition: "all 0.2s ease",
          }}
          className="news-content flex flex-col absolute top-[1.7rem] z-10 bg-black/90 w-[24rem] h-auto right-0 p-4 above-markers justify-between"
        >
          {/* <h3 className="uppercase font-semibold text-white mb-4 text-sm">
            <span>Industry updates</span>
          </h3>
          {updateData?.map((updates, index) => {
            return (
              <Link
                to={`/news/${updates?.slug}`}
                className={`grid grid-cols-2 flex-row mb-4 ${index} ${
                  index == 1 ? "xl:hidden 2xl:grid" : ""
                } `}
              >
                <div className="col-span-1">
                  <img
                    src={updates?.featuredImage.node.sourceUrl}
                    className="sm:w-[10rem]  border border-white"
                  />
                </div>

                <div
                  className="text-white col-span-1 ml-4 text-xs h-20 text-ellipsis overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: updates?.excerpt }}
                ></div>
              </Link>
            )
          })}

          <Link className="text-white text-sm relative mb-8" to="/news/">
            More Updates
            <svg
              className="h-4 w-4 text-green inline-block absolute top-[4px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
          */}
          <h3 className="uppercase font-semibold text-white text-sm mb-4">
            <span>Latest News</span>
          </h3>
          <Link
            // key={index}
            to={`/corporate-video`}
            className={`grid grid-cols-2 flex-row mb-4 news-post`}
          >
            <div className="col-span-1">
              <StaticImage
                // image={getImage(news?.featuredImage?.node?.localFile)}
                src={"../../images/corporate.png"}
                imgClassName="object-none object-top"
                className="sm:w-[9rem] sm:h-[6.8rem] border border-white shadow-fls--hover block"
                alt="News feature image"
              />
            </div>

            <div
              className="text-white col-span-1 ml-4 text-xs h-20 text-ellipsis overflow-hidden"
              // dangerouslySetInnerHTML={{ __html: news?.excerpt }}
            >
              <p>Watch our World Movers Corporate video</p>
            </div>
          </Link>
          {newsData?.map((news, index) => {
            return (
              <Link
                key={index}
                to={`/news/${news?.slug}`}
                className={`grid grid-cols-2 flex-row mb-4 news-post ${index} ${
                  index == 1 ? "xl:hidden 2xl:grid" : ""
                } `}
              >
                <div className="col-span-1">
                  <GatsbyImage
                    image={getImage(news?.featuredImage?.node?.localFile)}
                    className="sm:w-[9rem] sm:h-[6.8rem] border border-white shadow-fls--hover block"
                    alt="News feature image"
                  />
                </div>

                <div
                  className="text-white col-span-1 ml-4 text-xs h-20 text-ellipsis overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: news?.excerpt }}
                ></div>
              </Link>
            )
          })}
          <Link
            style={{ fontFamily: "gotham-bold" }}
            className="text-white text-sm relative mb-4"
            to="/news"
          >
            More news
            <svg
              className="h-4 w-4 text-green inline-block absolute top-[3px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
          <div className="flex flex-row justify-between">
            <button
              onClick={handleToggle_news}
              className=" text-sm relative uppercase text-green"
              href="#"
            >
              <svg
                className="h-4 w-4 text-green inline-block absolute top-[4px] rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="mr-4"></span>Close X
            </button>
            <div className=" relative bottom-0 right-0 flex align-bottom justify-end">
              <a
                target="_blank"
                className="inline-block w-4 h-4 mr-4 "
                href="https://www.facebook.com/FLSGroup1993"
              >
                <StaticImage
                  src={"../../images/svgs/facebook-blue.svg"}
                  alt="Social facebook"
                />
              </a>
              <a
                target="_blank"
                className="inline-block w-4 h-4  mr-4"
                href="https://www.linkedin.com/company/flsgroup/"
              >
                <StaticImage
                  src={"../../images/svgs/linkedin-blue.svg"}
                  alt="Social Linkedin"
                />
              </a>
              <a
                target="_blank"
                className="inline-block w-4 h-4 "
                href="https://www.youtube.com/c/FLSGroup"
              >
                <StaticImage
                  src={"../../images/svgs/youtube-blue.svg"}
                  alt="Social youtube"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
