import { graphql } from "gatsby"
import React from "react"
import ContactWhiteBg from "../components/contact-white-bg/contact-white-bg"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"

const ContactPage = ({ data }) => {
  return (
    <>
      <WhiteInternalLayout title={data.wpPage?.title}>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <ContactWhiteBg contact={data.wpPage} />
      </WhiteInternalLayout>
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
      contact {
        offices {
          offices {
            location
            officeName
            address
            email
            phoneNumber
            person
            role
            latLong
            personImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 125, height: 140)
                }
              }
            }
            map {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            mapUrl
          }
        }
      }
    }
  }
`
export default ContactPage
