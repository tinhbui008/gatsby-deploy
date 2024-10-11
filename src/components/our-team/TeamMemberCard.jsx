import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { TeamModal } from "../team-modal/team-modal"

function TeamMemberCard({ member, scroll }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="col-span-12 md:col-span-3">
      <div
        className="openModalBtn "
        onClick={() => {
          setModalOpen(true)
        }}
      >
        <div className="mb-8 gradient-overlay overflow-hidden w-full relative border-2 border-white col-span-3 shadow-fls cursor-pointer">
          <div className="absolute w-20 xl:w-16 md:w-12 w-18 z-10">
            <StaticImage
              className="w-full"
              src={"../../images/white-corner.png"}
              alt="Curved Corner"
            />
          </div>
          <GatsbyImage
            className="w-full"
            image={getImage(member.image?.localFile)}
            alt="Team member"
          />
          <div className=" flex flex-col items-start absolute bottom-0 left-0 px-4 pb-4 w-full z-10">
            <h5 className="text-green text-left text-lg md:text-[15px] uppercase leading-none">
              {member?.name}
            </h5>
            <p className="text-white text-sm relative text-left">
              {member?.role}
            </p>
          </div>
        </div>
      </div>

      <TeamModal
        setOpenModal={setModalOpen}
        popupData={member}
        modalOpen={modalOpen}
      />
    </div>
  )
}

export default TeamMemberCard
