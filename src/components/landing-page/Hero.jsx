import React from 'react'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

import TeamworkSVG from '../../assets/images/teamwork.svg'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div
      id="section-hero"
      className="flex flex-col-reverse items-center lg:flex-row px-6 md:px-20"
    >
      <div className="flex-1 flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="uppercase font-semibold md:text-lg 2xl:text-xl">
            {t('landingPage.hero.basedIn')}
          </div>
          <div>
            <StaticImage
              src="../../assets/images/indonesia-flag.png"
              alt="indonesia flag"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="capitalize font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary md:leading-tight 2xl:leading-tight text-5xl md:text-6xl">
          {t('landingPage.hero.headline')}
        </div>
        <div>
          <button className="capitalize inline-block font-semibold text-white bg-primary shadow-xl rounded-md mt-4 py-2 px-10 text-base 2xl:text-xl md:px-14 md:py-3 2xl:px-16 2xl:py-4 hover:transform hover:-translate-y-1 duration-300">
            contact us
          </button>
        </div>
      </div>
      <div className="flex-1 flex-col">
        <TeamworkSVG className="w-full h-auto"></TeamworkSVG>
      </div>
    </div>
  )
}

export default Hero
