import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { forwardRef } from "react"
import "./Footer.scss"

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-white relative z-50">
      <section className="container mx-auto py-6 2xl:py-8 px-12 2xl:px-12 footer">
        <div className="grid grid-cols-12 lg:gap-x-4">
          <div className="col-span-12 lg:col-span-2 ">
            <ul className="m-0">
              <li>
                <Link to="/who-we-are" className="uppercase text-xs link-main">
                  Who we are
                </Link>
              </li>
              <li>
                <a href="/who-we-are/#our-mission" className="link-sub text-xs">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/who-we-are/#our-vision" className="link-sub text-xs">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="/who-we-are/#history" className="link-sub text-xs">
                  History
                </a>
              </li>
              <li>
                <a
                  href="/who-we-are/#community-work"
                  className="link-sub text-xs"
                >
                  Community work
                </a>
              </li>
              <li>
                <a
                  href="/corporate-governance"
                  className="link-sub text-xs"
                >
                  Corporate Governance
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <ul className="m-0">
              <li>
                <Link
                  to="/capabilities"
                  className="uppercase text-xs link-main"
                >
                  Our Capabilities
                </Link>
              </li>
              <li>
                <Link to="/projects" className="link-sub text-xs">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="link-sub text-xs">
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  to="/warehousing"
                  className="link-sub text-xs"
                >
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/trading" className="link-sub text-xs">
                  Trading
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <ul className="m-0">
              <li>
                <Link to="/our-work" className="uppercase text-xs link-main">
                  Our work
                </Link>
              </li>
              <li>
                <Link
                  to="/safety-quality"
                  className="uppercase text-xs link-main"
                >
                  Safety & Quality
                </Link>
              </li>
              <li>
                <Link to="/news" className="uppercase text-xs link-main">
                  Industry updates & news
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <ul className="m-0">
              <li>
                <Link to="/careers" className="uppercase text-xs link-main">
                  careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="uppercase text-xs link-main">
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4">
            {/* <h5 className="uppercase text-xs gotham-bold">stay updated</h5>
          <p className="text-xs">
            Be the first to receive latest news from FLS and the supply chain
            world.
          </p> */}
            {/* <form action="#" class="mt-2">
            <div class="flex items-center relative">
              <label htmlFor="email" className="sr-only"></label>
              <input
                placeholder="Email Address"
                type="email"
                className="w-full px-2 py-2 bg-white shadow-inner  border border-gray-400 focus:outline-none relative rounded-tl-2xl pr-32"
              />
              <button className="bg-light_blue text-white px-5 py-2 absolute rounded-tl-2xl right-0 uppercase">
                Sign Up
              </button>
            </div>
          </form> */}
            <p className="text-xs">
              Our site uses cookies. By continuing to use our website, you agree
              to our{" "}
              <Link to="/privacy-policy" className="font-semibold text-xs">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-conditions" className="font-semibold text-xs ">
                Terms and Conditions
              </Link>
            </p>
            <div className=" relative bottom-0 right-0 flex align-bottom lg:justify-end justify-start mt-12">
              <a
                className="inline-block"
                href="https://www.linkedin.com/company/flsgroup/"
                target="_blank"
              >
                <StaticImage
                  src={"../../images/svgs/linkedin-blue.svg"}
                  className="w-8  h-8 mr-4"
                  alt="Linkedin"
                />
              </a>
              <a
                className="inline-block"
                href="https://www.facebook.com/FLSGroup1993"
                target="_blank"
              >
                <StaticImage
                  src={"../../images/svgs/facebook-blue.svg"}
                  className="w-8  h-8 mr-4"
                  alt="Facebook"
                />
              </a>

              <a
                className="inline-block "
                href="https://www.youtube.com/c/FLSGroup"
                target="_blank"
              >
                <StaticImage
                  src={"../../images/svgs/youtube-blue.svg"}
                  className="w-8  h-8 relative bottom-[-5px]"
                  alt="Youtube"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
})

export default Footer
