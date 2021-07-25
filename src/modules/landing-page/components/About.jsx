import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'

import TeamSVG from '../../../assets/images/team.svg'
import ArrowSVG from '../../../assets/icons/arrow.svg'

const About = () => {
  const { t } = useTranslation()

  return (
    <div id="section-about" className="flex flex-col px-6 md:px-20 space-y-2">
      <div className="flex flex-col">
        <h2 className="text-2xl lg:text-3xl font-medium text-primary tracking-wide uppercase">
          {t('landingPage.about.title')}
        </h2>
        <h2 className="text-2xl lg:text-4xl font-semibold tracking-wider">
          {t('landingPage.about.subtitle')}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-2 md:p-8">
          <TeamSVG className="w-full h-full" />
        </div>
        <div className="flex w-full md:w-1/2 p-2 md:p-8 text-lg">
          <div className="my-auto">
            <p>{t('landingPage.about.content')}</p>
            <br />
            <Link
              to="/"
              className="group font-semibold flex flex-row items-center hover:underline"
            >
              {t('common.learnMore')}
              <ArrowSVG className="w-5 h-5 ml-12 group-hover:transform group-hover:translate-x-4 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
