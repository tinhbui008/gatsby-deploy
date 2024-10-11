import { graphql } from "gatsby"
import React from "react"
import moment from "moment"
import { Link } from "gatsby"
import parse from "html-react-parser"

const AvailableJobs = props => {
  return (
    <div>
      <h2 className="text-light_blue text-3xl font-bold uppercase">
        Available Jobs
      </h2>
      <div className="overflow-x-auto">
        {props.careers?.length > 0 ? (
          <div className="mt-10 flex flex-col min-w-[700px]">
            <div className="py-5 border-b border-b-light_blue flex justify-between gap-10">
              <div className="lg:flex-1 w-3/12">
                <p className="font-bold gotham-bold text-light_blue">
                  Post date
                </p>
              </div>
              <div className="lg:flex-[2] w-5/12">
                <p className="font-bold gotham-bold text-light_blue">
                  Position
                </p>
              </div>
              <div className="lg:flex-1 w-4/12">
                <p className="font-bold gotham-bold text-light_blue">
                  Location
                </p>
              </div>
            </div>
            {props.careers?.map(item => (
              <div className="py-5 flex justify-between gap-10">
                <div className="lg:flex-1 w-3/12">
                  <p className="font-light">
                    {moment(item?.date).format("DD MMM, YYYY")}
                  </p>
                </div>
                <div className="lg:flex-[2] w-5/12">
                  <Link
                    to={`/careers/${item?.slug}`}
                    className="font-bold gotham-bold"
                  >
                    {item?.careerSingle?.title}
                  </Link>
                </div>
                <div className="lg:flex-1 w-4/12">
                  <p className="">{item?.careerSingle?.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gotham-book mt-10 rich-text-editor__career-placeholder">
            {parse(props?.placeholder || "")}
          </div>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allWpCareer {
      nodes {
        date
        careerSingle {
          coreResponsibilities
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
        }
      }
    }
  }
`

export default AvailableJobs
