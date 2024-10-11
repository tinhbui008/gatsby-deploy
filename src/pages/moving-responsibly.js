import { graphql } from "gatsby"
import * as React from "react"
import Seo from "../components/seo"
import WhiteInternalLayout from "../components/white-internal-layout"
import Gallery from "../components/Gallery/Gallery"
const Page = () => {
  return (
    <>
      <WhiteInternalLayout
        title={"FLS WORLD MOVERS SANCTUARY"}
        className={"!text-[32px] !lg:text-[36px] leading-[100%]"}
      >
        <Seo
          title={"Moving Responsibly"}
          description={"Moving Responsibly"}
          featuredImage={null}
        />
        <h2 className={"!text-[24px] !mb-[30px] text-[#47b868] leading-[100%]"}>
          KEEPING THE WORLD GREENER
        </h2>
        <section className="standard-internal">
          <div className="grid grid-cols-12 order-1">
            <div className="col-span-12 rich-text-editor mb-10">
              <p>
                In collaboration with Ecomatcher, we have undertaken a
                significant initiative by planting 1,000 trees in Krabi,
                Thailand. The tree planting activity, carried out by Conserve
                Natural Forests, a non-profit organisation based in Pai,
                Thailand, is a crucial step in restoring degraded tropical
                ecosystems.  <br />
                <br /> This partnership aligns seamlessly with our company
                purpose of, "Keeping the World Moving." Beyond the efficient
                movement of goods, we are dedicated to contributing to a greener
                and healthier planet. The 1,000 trees planted in Krabi
                symbolises our commitment to environmental responsibility and
                sustainable practices.  <br />
                <br /> In line with our commitment to transparency, an online
                Sustainability Impact Report (view report here) has been
                prepared by Ecomatcher. The report provides detailed insights
                into the tree planting activity's environmental, social, and
                economic impacts. <br /> <br />
                The key impact highlights include the following:  <br /> <br />
                <span className="font-extrabold">•</span> 1,000 Trees Planted:
                The initiative in Krabi has resulted in the planting of 1,000
                new trees, including Gurjan, Iron Wood and Malut, all
                contributing significantly to the restoration of the local
                ecosystem. Community Support: The project has positively
                impacted the lives of 3 local families, fostering community
                development and engagement. <br /> <br />
                <span className="font-extrabold">•</span> Carbon Sequestration:
                The initiative has already sequestered 10 tonnes of CO2, making
                a tangible impact on reducing the carbon footprint. Lifetime
                Carbon Sequestration: Over the lifetime of these trees, an
                estimated 250 tons of CO2 will be sequestered, further
                emphasizing the long-term environmental benefits of this
                initiative.
                <br /> <br />
                <span className="font-extrabold">•</span> Lifetime Carbon
                Sequestration: Over the lifetime of these trees, an estimated
                250 tons of CO2 will be sequestered, further emphasizing the
                long-term environmental benefits of this initiative.
              </p>
            </div>
            <div className="col-span-12">
              <h3 className="text-green text-lg mb-4">
                Follow the progress and growth of our World Movers Sanctuary
                here.
              </h3>
            </div>
            <div className="col-span-12 rich-text-editor">
              {/* <h2 className="mb-5 mt-10">ForestTracker:</h2> */}
              <iframe
                src="https://www.ecomatcher.com/forest-map/?fid=938"
                width="100%"
                style={{ minHeight: "600px" }}
              ></iframe>
            </div>
            <div className="col-span-12 rich-text-editor">
              {/* <h2 className="mb-5 mt-10">Impact report:</h2> */}
              <iframe
                src="https://www.ecomatcher.com/company/?cmp=FLSGroup"
                width="100%"
                style={{ minHeight: "600px" }}
              ></iframe>
            </div>
          </div>
        </section>
      </WhiteInternalLayout>
    </>
  )
}
export default Page
