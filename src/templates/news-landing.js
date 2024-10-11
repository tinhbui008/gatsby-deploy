import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SinglePost from "../components/SinglePost/SinglePost"

function News({ data }) {
  // get all post
  const allPost = data.allWpPost.nodes
  // get all category
  const allCategories = data.allWpCategory.nodes

  // filter post by category
  const getCategory = (posts, categoryName) => {
    return posts.filter(post => {
      return post.categories.nodes.some(category => {
        return category.name.includes(categoryName)
      })
    })
  }
  // get post by category
  let categories = {}
  allPost.forEach(post => {
    post.categories.nodes.forEach(category => {
      if (!categories[category.name]) {
        categories[category.name] = [...getCategory(allPost, category.name)]
      }
    })
  })

  // generator category slug
  function generatorSlug(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
  }
  return (
    <Layout title={"News"}>
      <Seo title={"News - FLS"} />
      <section className=" bg-light_blue relative">
        <div className="">
          <div className="">
            <div className="main-content">
              {/* start loop through Categories */}
              {Object.keys(categories).map((category, index) => {
                return (
                  <div key={index} className="category">
                    <h5 className="text-white text-2xl lg:text-4xl mt-5 uppercase">
                      {category}
                    </h5>
                    <p className="text-white mt-6 mb-7">
                      {allCategories[index]?.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2 md:gap-x-4 lg:gap-x-16">
                      {/* start loop through Post */}
                      {categories[category].slice(0, 3).map(post => {
                        return <SinglePost postData={post} key={post.id} />
                      })}
                      {/* end loop Post */}
                      <Link
                        to={`/news/${generatorSlug(category)}`}
                        className=" text-white hover:text-orange-500 md:col-span-2 mb-4 md:col-start-1 gotham-bold"
                      >
                        Read more...
                      </Link>
                    </div>
                  </div>
                )
              })}
              {/* end loop Categories */}
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
                    width: 688
                    height: 458
                    transformOptions: {cropFocus: NORTH, fit: COVER}
                  )
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
            description
          }
        }
      }
    }
    allWpCategory {
      nodes {
        description
      }
    }
  }
`
export default News
