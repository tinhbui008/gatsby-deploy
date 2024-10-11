import { graphql, Link } from "gatsby"
import React from "react"
import Gallery from "../components/Gallery/Gallery"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"

function NewsPost({ data }) {
  const post = data.wpPost
  const blocks = data.wpPost.blocks
  const darkMode = post.postSetting?.darkMode
  return (
    <>
      <WhiteInternalLayout
        title={post?.title}
        newsPost={true}
        darkMode={darkMode}
      >
        <Seo
          title={data.wpPost.seo?.title}
          description={data.wpPost.seo?.metaDesc}
          featuredImage={
            data.wpPost.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <section className="post-section relative">
          <div>
            <div className="main-content flex flex-col">
              <p className="text-gray-400  mr-10">{post?.date}</p>
              <div className="inline-flex mb-4">
                <p>
                  <span className={`${darkMode ? "text-gray-400" : ""}`}>
                    Posted under:{" "}
                  </span>
                  {post.categories?.nodes.map((category, index) => {
                    return (
                      <Link key={index} to={`/news/${category.slug}`}>
                        <span className="mr-2 text-light_blue underline">
                          {category.name}
                        </span>
                      </Link>
                    )
                  })}
                </p>
              </div>
              <div
                className={`${
                  darkMode ? " text-white" : "text-gray-800"
                } font-medium rich-text-editor`}
              >
                {blocks?.map((block, index) => {
                  if (block.name === "acf/slider") {
                    return (
                      <Gallery
                        key={"slider-" + index}
                        gallery={block.slider.slider}
                      />
                    )
                  } else {
                    return (
                      <div
                        key={block.name + index}
                        dangerouslySetInnerHTML={{
                          __html: block?.saveContent,
                        }}
                      />
                    )
                  }
                })}
              </div>

              {post.postSetting?.gallery && (
                <Gallery gallery={post.postSetting?.gallery} />
              )}
            </div>
          </div>
        </section>
      </WhiteInternalLayout>
    </>
  )
}
export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      blocksJSON
      title
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200)
            }
          }
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200)
            }
          }
        }
      }
      date(formatString: "DD MMMM, YYYY")

      postSetting {
        darkMode
        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1266
                height: 650
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      blocks {
        name
        saveContent
        ... on WpAcfSliderBlock {
          name
          slider {
            slider {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1266
                    height: 650
                    transformOptions: { cropFocus: CENTER, fit: COVER }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
export default NewsPost
