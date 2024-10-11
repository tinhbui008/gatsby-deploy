import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { forwardRef, useState } from "react"
import { withAnimationHooks } from "../Animated"
import Offices from "../contact-white-bg/Offices"
import "./contact.scss"

const ContactComponent = ({
  data,
  contactData,
  uniqueLocation,
  onChange,
  location,
  currentOffice,
  animator,
}) => {
  const ref = React.useRef()
  animator.setupAnimateRefs(ref)
  return (
    <div ref={ref}>
      <Link to="/contact">
        <h2 className="mb-8 text-white uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]">
          {data.wpPage?.title}
        </h2>
      </Link>

      <div className="grid grid-cols-12 order-1">
        <div className="col-span-12">
          <div className="rte">
            <p className="text-white font-semibold">
              {" "}
              {contactData?.description}
            </p>
          </div>
        </div>

        <div className="radio bg-transparent col-span-12 flex  flex-row">
          <ul className="mx-auto flex flex-row justify-center md:justify-start flex-wrap">
            {uniqueLocation?.map((office, index) => {
              return (
                <Offices
                  key={index}
                  office={office}
                  onChange={onChange}
                  location={location}
                  textColor="white"
                />
              )
            })}
          </ul>
        </div>
        <div className="hidden lg:flex col-span-12 md:col-span-6 order-3 md:order-2 mt-6">
          <div className="mr-8 max-w-[22rem]">
            <GatsbyImage
              image={getImage(currentOffice[0]?.map?.localFile)}
              alt={data.wpPage?.title}
            />
          </div>
        </div>

        {currentOffice?.map((office, index) => {
          return (
            <div className="office order-2 md:order-3" key={index}>
              <div className="mb-8 mt-6">
                <p className="uppercase text-green font-semibold mb-6 conthrax-bold">
                  {office?.officeName}
                </p>
                <a
                  href={office?.mapUrl}
                  target="_blank"
                  className="text-white font-semibold gotham-bold block"
                >
                  {office?.latLong}
                </a>
                <a
                  href={office?.mapUrl}
                  target="_blank"
                  className="text-white block gotham-book"
                >
                  <strong className="text-bold gotham-bold">Address:</strong>{" "}
                  {office?.address}
                </a>
                <p className="text-white">
                  <strong className="gotham-bold">Tel:</strong>{" "}
                  {office?.phoneNumber}
                </p>
                <p className="text-white">
                  <strong className="gotham-bold">Email:</strong>{" "}
                  {office?.email}
                </p>
              </div>
              <div className="mb-6 flex flex-row">
                <div className="mr-4">
                  <GatsbyImage
                    image={getImage(office?.personImage?.localFile)}
                    className="mb-6 md:mb-0 border rounded-xl border-white shadow-fls w-20"
                    alt={office?.officeName}
                  />
                </div>

                <div>
                  <p className="text-green uppercase font-semibold conthrax-bold">
                    {office?.person}
                  </p>
                  <p className="text-white uppercase font-semibold gotham-bold">
                    {office?.role}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ContactHome = withAnimationHooks(ContactComponent)

const AnimatedContact = forwardRef(({ contactData }, ref) => {
  let [location, setLocation] = useState("Thailand")

  return (
    <StaticQuery
      query={graphql`
        query {
          wpPage(id: { eq: "cG9zdDozOQ==" }) {
            title
            content
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
      `}
      render={data => {
        // get all offices location from WP
        let offices = data.wpPage.contact.offices.offices // confused acf field name!

        // get unique location if duplicate
        const uniqueLocation = offices.reduce((acc, current) => {
          const x = acc.find(item => item.location === current.location)
          if (!x) {
            return acc.concat([current])
          } else {
            return acc
          }
        }, [])

        // filter office by location
        let currentOffice = offices.filter(office => {
          return office.location === location
        })
        // handle change location
        const onChange = e => {
          setLocation(e.target.value)
        }

        return (
          <section
            ref={ref}
            className="contact my-8 py-8 pt-18 lg:my-16 lg:py-16"
          >
            <ContactHome
              {...{
                data,
                contactData,
                uniqueLocation,
                onChange,
                location,
                currentOffice,
              }}
            />
          </section>
        )
      }}
    />
  )
})
export default AnimatedContact
