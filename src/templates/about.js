import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import CommunityWork from "../components/community-work/community-work"
import ScrollDown from "../components/GlobalBackground/ScrollDown"
import HeroCard from "../components/HeroCard/HeroCard"
import HistoryText from "../components/history-text/history-text"
import LayoutFullScreen from "../components/LayoutFullScreen"
import OurTeam from "../components/our-team/our-team"
import RichtextVideo from "../components/richtext-video/richtext-video"
import Seo from "../components/seo"
import SnapShot from "../components/snapshot/snapshot"
import CorporateGovernance from "../components/corporate-governance/corporate-governance"

const AboutPage = ({ data }) => {
  const heroCardData = data.wpPage.whoWeAre?.whoWeAreHero
  const historyData = data.wpPage.whoWeAre?.flsHistory
  const snapShotData = data.wpPage.whoWeAre?.flsSnapshot
  const ourTeamData = data.wpPage.whoWeAre?.flsTeam
  const communityData = data.wpPage.whoWeAre?.flsCommunityWork
  const sponsorshipData = data.wpPage.whoWeAre?.flsSponsorship
  const corporateGovernanceData = data?.wpPage?.whoWeAre?.corporateGovernanceSection
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
            data.wpPage.seo?.opengraphImage?.localFile?.childImageSharp
              ?.gatsbyImageData || ""
          }
        />
        <section className="bg-light_blue lg:h-screen pb-12 lg:flex lg:flex-col lg:justify-center lg:pl-[200px] xl:pl-[50px]">
          <div className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:pl-[12rem] 2xl:px-[12rem]">
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
              />
            </div>
          </div>
          <ScrollDown />
        </section>

        <section className="bg-white py-10 lg:pl-[200px] xl:pl-[50px]">
          <RichtextVideo mainContent={data.wpPage.content} />
          <HistoryText history={historyData} />
          <SnapShot snapshot={snapShotData} />
          <OurTeam teams={ourTeamData} />
          <CorporateGovernance corporateGovernanceData={corporateGovernanceData}/>
          <CommunityWork
            communityData={communityData}
            sponsorshipData={sponsorshipData}
          />          
        </section>
      </LayoutFullScreen>
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
      whoWeAre {
        whoWeAreHero {
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
        flsHistory {
          title
          description
          historyBlock {
            title
            content
            image {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
        flsSnapshot {
          title
          description

          snapshotSlider {
            title
            description
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 430, height: 570)
                }
              }
            }
          }
        }
        flsTeam {
          teamMember {
            name
            role
            content
            country
            corporate
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        flsCommunityWork {
          title
          description
          communityWorkItem {
            title
            description
            facebookLink
            websiteLink
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        corporateGovernanceSection {
          title
          description
          button {
            url
            title
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        flsSponsorship {
          title
          description
          contentPicker {
            ... on WpPost {
              slug
              excerpt
              title
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 170
                        height: 115
                        quality: 100
                        layout: FIXED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default AboutPage
