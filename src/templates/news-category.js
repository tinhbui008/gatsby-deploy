import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SinglePost from "../components/SinglePost/SinglePost"

function News({ data, pageContext }) {
  const allPost = data.allWpPost.nodes

  const getCategory = (posts, categoryName) => {
    return posts.filter(post => {
      return post.categories.nodes.some(category => {
        return category.name.includes(categoryName)
      })
    })
  }
  // filter post by category
  const categoryPost = getCategory(allPost, pageContext.category)

  return (
    <Layout title={"News"}>
      <Seo title={`News - ${pageContext.category}`} />
      <section className=" bg-light_blue relative">
        <div className="">
          <div className="">
            <div className="main-content">
              <div className="category">
                <h5 className="text-white text-2xl lg:text-4xl mt-5">
                  {pageContext.category}
                </h5>
                <p className="text-white mt-6 mb-7">
                  Find out what's news with us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2 md:gap-x-4 lg:gap-x-16">
                  {categoryPost.map(post => {
                    return <SinglePost postData={post} key={post.id} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        id
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    transformOptions: {fit: COVER, cropFocus: NORTH},
                    aspectRatio: 1.5, width: 350, quality: 90
                  )
              }
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
export default News
