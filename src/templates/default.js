import { graphql } from "gatsby"
import * as React from "react"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"
import Gallery from "../components/Gallery/Gallery"
const Default = ({ data }) => {
  return (
    <>
      <WhiteInternalLayout title={data.wpPage?.title}>
        <Seo
          title={data.wpPage.seo.title}
          description={data.wpPage.seo.metaDesc}
          featuredImage={
            data.wpPage.seo.opengraphImage?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
        />
        <section className="standard-internal">
          <div className="grid grid-cols-12 order-1">
            <div className="col-span-12">
              {data.wpPage?.blocks && (
                <Gallery gallery={data?.wpPage?.blocks[0]?.slider?.slider} />
              )}
            </div>
            <div
              className="col-span-12 rich-text-editor"
              dangerouslySetInnerHTML={{ __html: data.wpPage?.content }}
            ></div>
          </div>
        </section>
      </WhiteInternalLayout>
    </>
  )
}
export default Default

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      id
      content
      title
      slug
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
      blocks {
        ... on WpAcfSliderBlock {
          name
          slider {
            slider {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`
