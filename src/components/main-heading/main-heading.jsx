import React from "react"

const MainHeading = ({ title }) => {
  return (
    <section className="bg-light_blue">
      <div className="container mx-auto px-12 lg:pr-8 lg:pl-[12rem] xl:pl-[12rem] xl:pr-8">
        <h1 className="text-white"> {title} </h1>
      </div>
    </section>
  )
}
export default MainHeading
