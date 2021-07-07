import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import TeamworkSVG from '../../assets/images/teamwork.svg'

function Hero() {
  return <div className="flex flex-col flex-col-reverse lg:flex-row items-center px-6 md:px-20 lg:mt-0">
    <div className="flex-1 flex-col">
      <div className="flex items-center uppercase font-semibold space-x-3">
        <span>based in jakarta, indonesia</span>
        <StaticImage
          src="../../assets/images/indonesia-flag.png"
          alt="indonesia flag"
          width={20}
          height={20}
        />
      </div>
      <div className="capitalize font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-tight lg:leading-normal xl:leading-tight 2xl:leading-tight text-5xl md:text-5xl lg:text-6xl 2xl:text-8xl">
        we design &amp; build unique things
      </div>
      <div className="capitalize inline-block text-white font-semibold bg-primary shadow-xl rounded-lg mt-8 text-base p-3 px-5 lg:p-3 lg:px-6 lg:text-xl 2xl:text-2xl xl:p-4 xl:px-8 2xl:p-7 2xl:px-14">
        contact us
      </div>
    </div>
    <div className="flex-1 lg:flex">
      <TeamworkSVG className="w-full h-auto" />
    </div>
  </div>
}

export default Hero
