import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import TeamworkSVG from '../../assets/images/teamwork.svg'

function Hero() {
  return <div className="flex flex-row items-center px-20">
    <div className="flex-1 flex-col">
      <div className="flex items-center uppercase font-semibold space-x-3">
        <span>based in, indonesia</span>
        <StaticImage
          src="../../assets/images/indonesia-flag.png"
          alt="indonesia flag"
          width={20}
          height={20}
        />
      </div>
      <div className="font-bold leading-tight lg:leading-tight md:leading-normal text-4xl md:text-5xl lg:text-6xl capitalize mt-2 text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
        we design &amp; build unique things
      </div>
      <div className="capitalize inline-block shadow-lg font-semibold bg-primary text-white p-2 px-4 mt-8 lg:p-3 lg:px-8 rounded-md">
        contact us
      </div>
    </div>
    <div className="flex-1 hidden lg:flex">
      <TeamworkSVG className="w-full h-auto" />
    </div>
  </div>
}

export default Hero
