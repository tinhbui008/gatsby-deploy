import React from "react"
function Offices({ office, onChange, location, textColor }) {
  return (
    <li className="odd:mr-4 sm:mr-4 min-w-[130px] lg:min-w-[180px]">
      <input
        className="sr-only peer"
        type="radio"
        value={office.location}
        name="office"
        id={office.location}
        onChange={onChange}
        checked={location === office.location}
      />
      <label
        className={`transition-all hover:bg-[#47b868] p-2 text-${textColor} min-w-full lg:min-w-[180px] block border border-light_blue uppercase gotham-bold text-center cursor-pointer focus:outline-none peer-checked:border-light_blue peer-checked:text-white`}
        htmlFor={office.location}
      >
        <span className="relative">{office.location}</span>
      </label>
    </li>
  )
}

export default Offices
