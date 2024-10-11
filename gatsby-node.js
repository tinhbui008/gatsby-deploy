const redirects = require("./redirects.json")
const path = require("path")

//(to fixed) https://github.com/wp-graphql/wp-graphql/issues/1460#issuecomment-742235504
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `
  createTypes(typeDefs)
}

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

//create Landing page template

const createLandingPage = (result, createPage) => {
  return [
    createPage({
      path: "/corporate-video",
      component: path.resolve("./src/templates/landing-page.js"),
    }),
  ]
}
// create News template
const createPaginationPages = (result, createPage) => {
  return [
    createPage({
      path: `/news`,
      component: path.resolve(`./src/templates/news-landing.js`),
    }),
  ]
}
// create Our-work template
const createProjectPagination = (result, createPage) => {
  return [
    createPage({
      path: "/our-work",
      component: path.resolve(`./src/templates/our-work.js`),
      context: {
        industries: "all",
        capability: "all",
      },
    }),
  ]
}
// create Our-work "Capability" archive pages
const createArchiveCapability = (result, createPage) => {
  return result.data.allWpCapability.nodes.map(node => {
    createPage({
      path: `/our-work/capability/${node.slug}`,
      component: path.resolve(`./src/templates/our-work.js`),
      context: {
        industries: "all",
        capability: node.name,
      },
    })
  })
}
// create Our-work "Industry" archive pages
const createArchiveIndustry = (result, createPage) => {
  return result.data.allWpIndustry.nodes.map(node => {
    createPage({
      path: `/our-work/industry/${node.slug}`,
      component: path.resolve(`./src/templates/our-work.js`),
      context: {
        industries: node.name,
        capability: "all",
      },
    })
  })
}

const createCareerPage = (result, createPage) => {
  return result.data.allWpCareer.nodes.map(node => {
    createPage({
      path: `/careers/${node.slug}`,
      component: path.resolve(`./src/templates/singleCareer.js`),
      context: {
        slug: node?.slug,
        id: node?.id,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )

  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
      allWpCategory {
        nodes {
          name
          slug
        }
      }
      allWpOurWork {
        nodes {
          slug
        }
      }
      allWpCapability {
        nodes {
          name
          slug
        }
      }
      allWpIndustry {
        nodes {
          slug
          name
        }
      }
      allWpPage {
        nodes {
          slug
          uri
          template {
            templateName
          }
        }
      }
      allWpCareer {
        nodes {
          id
          slug
        }
      }
    }
  `).then(result => {
    return [
      // create News Single template for each News post.
      ...result.data.allWpPost.nodes.map(node => {
        createPage({
          path: `/news/${node.slug}`,
          component: path.resolve(`./src/templates/news-post.js`),
          context: {
            slug: node.slug,
            isCanonical: true,
          },
        })
      }),
      // create Single Category template for Categories list ( eg:/news/fls-news, /news/updates)
      ...result.data.allWpCategory.nodes.map(category => {
        createPage({
          path: `/news/${category.slug}`,
          component: path.resolve(`./src/templates/news-category.js`),
          context: {
            category: category.name,
            slug: category.slug,
          },
        })
      }),
      // create Project Single template for each Project
      ...result.data.allWpOurWork.nodes.map(node => {
        createPage({
          path: `/our-work/${node.slug}`,
          component: path.resolve(`./src/templates/our-project.js`),
          context: {
            slug: node.slug,
          },
        })
      }),
      // auto generator page from WP
      ...result.data.allWpPage.nodes.map(node => {
        let templatePath = node.uri === "/homepage/" ? "/" : node.uri
        let template = generatorSlug(node.template.templateName)
        createPage({
          path: templatePath,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            slug: node.slug,
          },
        })
      }),
      ...createPaginationPages(result, createPage),
      ...createProjectPagination(result, createPage),
      ...createArchiveCapability(result, createPage),
      ...createArchiveIndustry(result, createPage),
      ...createCareerPage(result, createPage),
      ...createLandingPage(result, createPage),
    ]
  })
}
