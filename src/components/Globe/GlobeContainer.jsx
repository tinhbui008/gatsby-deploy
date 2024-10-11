import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useProgress } from "@react-three/drei"
import { useMediaQuery } from "beautiful-react-hooks"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState, lazy, Suspense } from "react"
import { useSnapshot } from "valtio"
import { state } from "../../store"
import GlobalBackgrounds from "../GlobalBackground/GlobalBackgrounds"
import CapabilityOverlay from "../Globe/GlobeCapabilities/CapabilityOverlay"
import OfficeOverlay from "../Globe/GlobeOffices/OfficeOverlay"
import GlobeTitle from "./GlobeTitle"
import GlobeCanvas from "./GlobeCanvas"
export default function GlobeContainer() {
  // get store data
  const snap = useSnapshot(state)
  // media query component
  const isBig = useMediaQuery("(min-width: 1024px)")
  const { progress } = useProgress()
  //   get Global data from WP back-end
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoyOTE=" }) {
        homepage {
          globe {
            capabilities {
              title
              description
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 375, height: 375)
                  }
                }
              }
            }
            offices {
              title
              address
              telephone
              person
              personRole
              phoneNumber
              lat
              long
              personAvatar {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 90, height: 100)
                  }
                }
              }
              highlightedProjects {
                ... on WpOurWork {
                  slug
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 200, height: 120)
                        }
                      }
                    }
                  }
                }
              }
              map {
                sourceUrl
              }
              mapUrl
            }
          }
        }
      }
    }
  `)
  const globalData = data.wpPage.homepage.globe
  const globalCapability = globalData.capabilities
  const overlayCapData = globalCapability.filter(item => {
    return item.title === snap.selectedCapability
  })

  return (
    <div
      className="globe-container z-10"
      style={{
        position: progress === 100 ? "sticky" : "",
        top: 0,
      }}
    >
      {snap.globe.isMainElement && (
        <>
          <OfficeOverlay
            globalOffice={globalData.offices[snap.selectedOfficeId - 1]}
          />
          <CapabilityOverlay globalCapability={overlayCapData[0]} />
        </>
      )}

      <GlobeCanvas
        globalData={globalData}
        globalCapability={globalCapability}
      />

      {/* default position  [10, 0, -2.5]  */}
      {/* dpr={[1, 2]} camera={{ fov: 50 } */}
    </div>
  )
}
