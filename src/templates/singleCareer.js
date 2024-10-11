import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import parse from "html-react-parser"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"

const SingleCareer = props => {
  return (
    <WhiteInternalLayout title={props.data?.wpCareer?.careerSingle?.title}>
      <div className="lg:p-10">
        <Seo
          title={props.data?.wpCareer?.careerSingle?.title}
          description={parse(
            props.data?.wpCareer?.careerSingle?.jobPurposes || ""
          )}
        />
        {/* <h1 className="text-light_blue uppercase text-3xl">
          {props.data?.wpCareer?.careerSingle?.title}
        </h1> */}
        <div className="mt-16 flex flex-wrap gap-y-20">
          <div className="lg:flex-[2] lg:pr-20">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10 lg:gap-5">
                {props.data?.wpCareer?.date && (
                  <p className="text-[#AFB3BB]">
                    {moment(props.data?.wpCareer?.date).format("DD MMM, YYYY")}
                  </p>
                )}
                {props.data?.wpCareer?.careerSingle?.title && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Position title
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.title}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.location && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Location
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.location}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.jobLevel && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Job level
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.jobLevel}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.department && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Department
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.department}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.section && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Section
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.section}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.reportTo && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Report to
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {props.data?.wpCareer?.careerSingle?.reportTo}
                    </p>
                  </div>
                )}
                {props.data?.wpCareer?.careerSingle?.subordinates && (
                  <div className="flex flex-col sm:flex-row">
                    <p className="text-light_blue uppercase font-bold gotham-bold flex-1">
                      Subordinates
                    </p>
                    <p className="flex-1 lg:flex-[2]">
                      {parse(
                        props.data?.wpCareer?.careerSingle?.subordinates || ""
                      )}
                    </p>
                  </div>
                )}
              </div>
              {props.data?.wpCareer?.careerSingle?.jobPurposes && (
                <div className="flex flex-col sm:gap-5">
                  <p className="text-light_blue uppercase gotham-bold font-bold">
                    Job purpose
                  </p>
                  <div className="rich-text-editor">
                    {parse(
                      props.data?.wpCareer?.careerSingle?.jobPurposes || ""
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:gap-5">
                <p className="text-light_blue uppercase gotham-bold font-bold">
                  Core responsibilities
                </p>
                <div className="rich-text-editor">
                  {parse(
                    props.data?.wpCareer?.careerSingle?.coreResponsibilities ||
                      ""
                  )}
                </div>
              </div>
              {props.data?.wpCareer?.careerSingle?.qualification && (
                <div className="flex flex-col sm:gap-5">
                  <p className="text-light_blue uppercase gotham-bold font-bold">
                    Qualification
                  </p>
                  <div className=" rich-text-editor">
                    {parse(
                      props.data?.wpCareer?.careerSingle?.qualification || ""
                    )}
                  </div>
                </div>
              )}
              {props.data?.wpCareer?.careerSingle?.requiredSkills && (
                <div className="flex flex-col sm:gap-5">
                  <p className="text-light_blue uppercase gotham-bold font-bold">
                    Required skills
                  </p>
                  <div className="rich-text-editor">
                    {parse(
                      props.data?.wpCareer?.careerSingle?.requiredSkills || ""
                    )}
                  </div>
                </div>
              )}
              {props.data?.wpCareer?.careerSingle?.networkInteraction && (
                <div className="flex flex-col sm:gap-5">
                  <p className="text-light_blue gotham-bold uppercase font-bold">
                    Network interaction
                  </p>
                  <div className="rich-text-editor">
                    {parse(
                      props.data?.wpCareer?.careerSingle?.networkInteraction ||
                        ""
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex-1 lg:pl-16 lg:border-l border-l-[#AFB3BB] h-fit flex flex-col gap-10 gotham-book">
            <h2 className="text-light_blue font-bold gotham-bold">Apply now</h2>
            <div>
              <button
                onClick={e =>
                  window.open(props.data?.wpCareer?.careerSingle?.linkedln)
                }
                className="p-3 bg-light_blue gotham-bold text-white font-bold"
              >
                Linkedln
              </button>
            </div>
            {props.data?.wpCareer?.careerSingle?.email && (
              <p>
                or email us at: <br />
                <a
                  href={`mailto:${props.data?.wpCareer?.careerSingle?.email}?subject=Subject`}
                  className="text-light_blue cursor-pointer underline decoration-2 text-d gotham-bold"
                >
                  {props.data?.wpCareer?.careerSingle?.email}
                </a>
              </p>
            )}
          </div>
        </div>
        <div className="mt-20">
          <div className="p-5 bg-light_blue rounded-tl-[3.5rem]">
            <h3 className="text-white font-bold gotham-bold text-center">
              Please apply using the links above to contact us along with your
              CV.
            </h3>
          </div>
        </div>
      </div>
    </WhiteInternalLayout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpCareer(slug: { eq: $slug }) {
      date
      careerSingle {
        coreResponsibilities
        networkInteraction
        department
        jobLevel
        jobPurposes
        location
        qualification
        reportTo
        requiredSkills
        section
        subordinates
        title
        linkedln
        email
      }
    }
  }
`

export default SingleCareer
