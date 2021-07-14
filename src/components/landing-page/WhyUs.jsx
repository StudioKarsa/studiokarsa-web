import React from 'react'

import CustomDesign from '../../assets/icons/custom-design.svg'
import ModernUI from '../../assets/icons/modern-ui.svg'
import MobileFriendly from '../../assets/icons/mobile-friendly.svg'

import LogoTransparent from '../../assets/images/logo-transparent.svg'

const WhyUs = () => (
  <div
    id="section-whyus"
    className="flex flex-col items-center px-6 md:px-20 py-12 space-y-12 relative"
  >
    <div>
      <LogoTransparent className="absolute transform -translate-x-2/4 -translate-y-2/4 top-3/4 left-2/4 w-full md:w-6/12 h-auto"></LogoTransparent>
    </div>
    <div className="flex flex-col text-center z-10">
      <div className="text-2xl md:text-3xl text-primary tracking-widest uppercase">
        why us?
      </div>
      <div className="text-2xl md:text-3xl font-semibold">
        Creating impactful digital experience
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
        <div className="font-semibold text-2xl 2xl:text-3xl">Custom Design</div>
        <div className="text-gray-500 text-lg 2xl:text-2xl">
          We design your websites and mobile apps based on your brand identity and brand values
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
        <div className="font-semibold text-2xl 2xl:text-3xl">Modern UI</div>
        <div className="text-gray-500 text-lg 2xl:text-2xl">
          We provide a modern, user-friendly interface that’s easy to use and
          understand
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
        <div className="font-semibold text-2xl 2xl:text-3xl">
          Mobile Friendly
        </div>
        <div className="text-gray-500 text-lg 2xl:text-2xl">
          We build up your website in a way that's optimized for mobile devices
        </div>
      </div>
    </div>
  </div>
)

export default WhyUs
