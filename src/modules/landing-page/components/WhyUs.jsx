import React from 'react'
import { useTranslation } from 'react-i18next'

import CustomDesign from '../../../assets/icons/custom-design.svg'
import ModernUI from '../../../assets/icons/modern-ui.svg'
import MobileFriendly from '../../../assets/icons/mobile-friendly.svg'

import LogoTransparent from '../../../assets/images/logo-transparent.svg'

const WhyUs = () => {
  const { t } = useTranslation()

  return (
    <div
      id="section-whyus"
      className="flex flex-col items-center px-6 md:px-20 py-12 space-y-12 relative"
    >
      <div>
        <LogoTransparent className="absolute transform -translate-x-2/4 -translate-y-2/4 top-3/4 left-2/4 w-full md:w-6/12 h-auto"></LogoTransparent>
      </div>
      <div className="flex flex-col text-center z-10">
        <div className="text-2xl md:text-3xl text-primary tracking-widest uppercase">
          {t('landingPage.whyUs.title')}
        </div>
        <div className="text-2xl md:text-3xl font-semibold">
          {t('landingPage.whyUs.subtitle')}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly w-full space-x-0 space-y-6 lg:space-x-14 2xl:space-x-24 lg:space-y-0 z-10">
        <div className="flex flex-1 flex-col text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-full p-2 2xl:p-4">
              <div className="bg-secondary bg-opacity-40 scale-75 md:scale-90 rounded-full">
                <CustomDesign className="scale-50 md:scale-75 rounded-full" />
              </div>
            </div>
          </div>
          <div className="font-semibold text-2xl">
            {t('landingPage.whyUs.contents.customDesign.title')}
          </div>
          <div className="text-gray-500 text-lg">
            {t('landingPage.whyUs.contents.customDesign.description')}
          </div>
        </div>
        <div className="flex flex-1 flex-col text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-full p-2 2xl:p-4">
              <div className="bg-secondary bg-opacity-40 scale-75 md:scale-90 rounded-full">
                <ModernUI className="scale-50 md:scale-75 rounded-full" />
              </div>
            </div>
          </div>
          <div className="font-semibold text-2xl">
            {t('landingPage.whyUs.contents.modernUi.title')}
          </div>
          <div className="text-gray-500 text-lg">
            {t('landingPage.whyUs.contents.modernUi.description')}
          </div>
        </div>
        <div className="flex flex-1 flex-col text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-full p-2 2xl:p-4">
              <div className="bg-secondary bg-opacity-40 scale-75 md:scale-90 rounded-full">
                <MobileFriendly className="scale-50 md:scale-75 rounded-full" />
              </div>
            </div>
          </div>
          <div className="font-semibold text-2xl">
            {t('landingPage.whyUs.contents.mobileFriendly.title')}
          </div>
          <div className="text-gray-500 text-lg">
            {t('landingPage.whyUs.contents.mobileFriendly.description')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
