import React from 'react'
import { branche_hover } from '../assets'

function OurTeamHero() {
  return (
    <div className="font-Montserrat">
    <div
      className="w-full h-96 flex justify-center items-center"
      style={{
        backgroundImage: `url(${branche_hover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-5xl text-white">
            Meet Our Team
      </h1>
    </div>
    </div>
  )
}

export default OurTeamHero
