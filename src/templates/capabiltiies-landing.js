import { graphql } from "gatsby"
import React from "react"
import Capabilities from "../components/Capabilities/Capabilities"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CapabilitiesLanding = ({ data }) => {
  return (
    <>
      <Layout title={data?.wpPage.title}>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <section className="capabilities_home capabilities_home_single">
          <div className="grid grid-cols-12 order-1">
            <div
              className="col-span-12 rich-text-editor text-white"
              dangerouslySetInnerHTML={{ __html: data?.wpPage?.content }}
            ></div>
          </div>
          <Capabilities data={data?.wpPage} bgColour="white" isHome={false} />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      content
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
    }
  }
`

export default CapabilitiesLanding
