import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import OurWorks from "../components/OurWork/OurWork"
import Seo from "../components/seo"

const OurWork = ({ data, pageContext }) => {
  const [form, setValue] = React.useState({
    capabilties: pageContext.capability,
    industries: pageContext.industries,
  })
  let ourWorkData = data.allWpOurWork.nodes
  const onChange = e => {
    const { value, name } = e.target
    setValue({ ...form, [name]: value })
  }

  // filter data with 2 field  "industries" and "capabilties"
  let filterData = ourWorkData?.filter(item => {
    if (form.capabilties === "all" && form.industries === "all") {
      return item
    }
    if (form.capabilties === "all") {
      return item.industries.nodes.some(indus => {
        return indus.name === form.industries
      })
    } else if (form.industries === "all") {
      return item.capabilities.nodes.some(cap => {
        return cap.name === form.capabilties
      })
    } else {
      return (
        item.capabilities.nodes.some(cap => {
          return cap.name === form.capabilties
        }) &&
        item.industries.nodes.some(indus => {
          return indus.name === form.industries
        })
      )
    }
  })

  return (
    <>
      <Layout title="Our Work">
        <Seo title="Our work" />
        <OurWorks
          ourWorkData={filterData}
          capability={data.allWpCapability.nodes}
          industry={data.allWpIndustry.nodes}
          filter={onChange}
        />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query {
    wp {
      acfOptionsArchives {
        ourWorkPage {
          title
          description
        }
      }
    }
    allWpOurWork(sort: { fields: [date] }) {
      nodes {
        slug
        capabilities {
          nodes {
            name
          }
        }
        industries {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childrenImageSharp {
                fluid(maxWidth: 350, quality: 90, fit: COVER) {
                  src
                }
              }
            }
          }
        }
        ourWork {
          projectName
          projectDescription
        }
      }
    }
    allWpCapability {
      nodes {
        name
      }
    }
    allWpIndustry {
      nodes {
        name
      }
    }
  }
`
export default OurWork
