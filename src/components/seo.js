/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import { Helmet } from "react-helmet"
function Seo(seo) {
  const { site, featuredImage, favicon } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            og {
              siteName
              fbTitle
              fbDescription
              twitterCreator
              twitterDescription
            }
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/FLS-default-og-image.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
        favicon: file(absolutePath: { glob: "**/src/images/favicon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 16, height: 16)
          }
        }
      }
    `
  )
  const ogImage =
    seo.featuredImage?.images?.fallback?.src ??
    featuredImage?.childImageSharp?.gatsbyImageData.images.fallback.src
  const title = seo.title ?? site.siteMetadata?.title
  const description = seo.description ?? site.siteMetadata?.description
  const location = useLocation()
  const metas = [
    {
      name: "icon",
      content: favicon?.childImageSharp?.gatsbyImageData.images.fallback.src,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:image",
      content: ogImage,
    },

    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:title",
      content: seo.opengraphTitle || title,
    },
    {
      name: "og:description",
      content: seo.opengraphDescription || description,
    },
    {
      name: "og:site_name",
      content: site.siteMetadata.og.siteName,
    },
    {
      name: "og:url",
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:description",
      content: seo.twitterDescription || description,
    },
    {
      name: "twitter:title",
      content: seo.twitterTitle || title,
    },
    {
      name: "twitter:image",
      content: ogImage,
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.og.twitterCreator,
    },
  ]
  if (seo.keywords) {
    metas.push({
      name: "keywords",
      content: seo.keywords,
    })
  }
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {metas.map(meta => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}
      <link
        rel="canonical"
        href={`${site?.siteMetadata?.siteUrl}${location.pathname}`}
      ></link>
    </Helmet>
  )
}

Seo.propTypes = {
  seo: PropTypes.object,
}

export default Seo
