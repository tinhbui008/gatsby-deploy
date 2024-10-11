import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import HeroCard from "../components/HeroCard/HeroCard"
import LayoutFullScreen from "../components/LayoutFullScreen"
import Seo from "../components/seo"
import TextBlockIcons from "../components/text-block-icons/text-block-icons"
import scrollDown from "../images/scroll-down.png"
const ProjectPage = ({ data, pageContext }) => {
  if (!data) return null
  let {
    pageTitle,
    directorContent,
    directorFooter,
    textTitle,
    textContent,
    toggleList,
  } = data.wpPage.capabilities

  const textBlockData = { textTitle, textContent, toggleList }
  const heroCardData = data.wpPage.capabilities?.heroCard

  const heroCard = {
    title: heroCardData?.title,
    image: getImage(heroCardData?.image?.localFile),
    person: heroCardData?.person,
    role: heroCardData?.role,
    logo: getImage(heroCardData?.logo?.localFile),
  }

  return (
    <>
      <LayoutFullScreen title={data.wpPage.title}>
        <Seo
          title={data.wpPage.seo?.title}
          description={data.wpPage.seo?.metaDesc}
          featuredImage={
            data.wpPage.seo?.opengraphImage?.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <section className="bg-light_blue lg:h-screen pb-12 lg:flex lg:flex-col lg:justify-center lg:pl-[200px] xl:pl-[50px]">
          <div className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]">
            <div className="grid grid-cols-2 flex-col z-30">
              <h1 className="text-white text-[24px] lg:text-6xl uppercase mb-12 lg:mb-20 col-span-2">
                {data.wpPage.title}
              </h1>
              <HeroCard
                title={heroCard.title}
                image={heroCard.image}
                person={heroCard.person}
                role={heroCard.role}
                logo={heroCard.logo}
                titleSize={"small"}
                customClass={pageContext.slug}
              />
            </div>
          </div>
          <div className="absolute lg:bottom-0 w-full  justify-center z-20 scale-50 hidden lg:flex">
            <img
              className="animate-bounce"
              src={scrollDown}
              style={{ animation: "bounce 2s infinite" }}
            />
          </div>
        </section>
        <section className="bg-white py-10 lg:pl-[200px] xl:pl-[0]">
          <TextBlockIcons textBlockData={textBlockData} />
        </section>
      </LayoutFullScreen>
    </>
  )
}
export const query = graphql`
  query ($slug: String!) {
    wpPage(slug: { eq: $slug }) {
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
      capabilities {
        pageTitle
        directorContent
        directorFooter
        textTitle
        textContent
        toggleList {
          icon {
            id
            sourceUrl
          }
          header
          content
        }
        heroCard {
          title
          person
          role
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 432, height: 540, placeholder: BLURRED)
              }
            }
          }
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectPage
