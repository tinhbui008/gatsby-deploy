import React, { useState } from "react"
import "./our-team.scss"
import TeamMemberCard from "./TeamMemberCard"
function OurTeam({ teams }) {
  let countries = []
  teams?.teamMember?.forEach(team => {
    if (team?.country !== null && !countries.includes(team?.country)) {
      countries.push(team?.country)
    }
  })
  let [location, setLocation] = useState("Corporate")
  const onChange = e => {
    const { value } = e.target
    setLocation(value)
  }
  let filterTeamCountry = teams.teamMember.filter(member => {
    if (location === null) {
      return member
    }
    if (location === "Corporate") {
      return member.corporate
    }
    return member.country?.includes(location)
  })
  return (
    <section className="container z-30 mx-auto px-12 xl:pr-[8rem] xl:px-[16rem] 2xl:px-[12rem] pt-10">
      <h3 className="uppercase text-light_blue lg:text-3xl">Our Team</h3>
      <div className="relative grid grid-cols-12 lg:gap-x-4">
        <div className="radio_our-team bg-transparent col-span-12 flex flex-row">
          <ul className=" m-8 mx-auto flex justify-center md:justify-start flex-row flex-wrap">
            <li className="odd:mr-4 sm:mr-4 min-w-[130px] lg:min-w-[180px]">
              <input
                checked={location === "Corporate"}
                className="sr-only peer"
                type="radio"
                value="Corporate"
                name="answer"
                id="Corporate"
                onChange={onChange}
              />
              <label
                className="min-w-full lg:min-w-[180px] block  p-2 text-light_blue text-center gotham-bold uppercase border border-light_blue  cursor-pointer focus:outline-none peer-checked:text-white"
                htmlFor="Corporate"
              >
                <span className="relative"> Corporate</span>
              </label>
            </li>
            {countries?.length > 0 &&
              countries.map(country => {
                return (
                  <li className="odd:mr-4 sm:mr-4 min-w-[130px] lg:min-w-[180px]">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value={country}
                      name="answer"
                      id={country}
                      onChange={onChange}
                    />
                    <label
                      className="min-w-full lg:min-w-[180px] block  p-2 text-light_blue text-center gotham-bold uppercase border border-light_blue  cursor-pointer focus:outline-none peer-checked:text-white"
                      htmlFor={country}
                    >
                      <span className="relative">{country}</span>
                    </label>
                  </li>
                )
              })}
          </ul>
        </div>
        {filterTeamCountry?.map((member, index) => {
          return <TeamMemberCard member={member} key={index} />
        })}
      </div>
    </section>
  )
}

export default OurTeam
