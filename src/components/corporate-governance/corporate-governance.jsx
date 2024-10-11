import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const CorporateGovernance = ({ corporateGovernanceData }) => (
  <section
    id="corporate-governance-section"
    className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem]"
  >
    <div className="mb-8">
      <div>
        <h4 className="text-light_blue mb-4 uppercase lg:text-2xl">
          {corporateGovernanceData?.title}
        </h4>
        <div className="grid grid-cols-1">
          <div className="pr-4 mb-6 lg:mb-0">
            {corporateGovernanceData?.description && <p
              className="text-base lg:pr- rich-text-editor"
              dangerouslySetInnerHTML={{
                __html: corporateGovernanceData?.description,
              }}
            ></p>}
            <Link class="block !text-light_blue underline mt-4 read-more" to={corporateGovernanceData?.button?.url}>{corporateGovernanceData?.button?.title}</Link>
          </div>

          <div className="flex flex-col">
            {corporateGovernanceData?.image && <GatsbyImage
              image={getImage(corporateGovernanceData?.image.localFile)}
              alt={
                corporateGovernanceData.title || "Corporate Governance image"
              }
            />}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CorporateGovernance
