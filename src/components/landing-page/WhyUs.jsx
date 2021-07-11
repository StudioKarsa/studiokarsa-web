import React from 'react'

import CustomDesign from '../../assets/icons/custom-design.svg'
import ModernUI from '../../assets/icons/modern-ui.svg'
import MobileFriendly from '../../assets/icons/mobile-friendly.svg'

function WhyUs() {
  return <div className="flex flex-col items-center p-12 space-y-12">
    <div className="flex flex-col text-center">
      <div className="uppercase tracking-wider font-medium text-primary text-2xl md:text-3xl">
        why us?
      </div>
      <div className="font-semibold text-2xl md:text-3xl md:mb-4">
        Creating impactful digital experience
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-evenly w-full space-x-0 space-y-6 lg:space-x-14 2xl:space-x-24 lg:space-y-0">
      <div className="flex flex-1 flex-col text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-full p-2 2xl:p-4">
            <div className="bg-secondary bg-opacity-40 scale-75 md:scale-90 rounded-full">
              <CustomDesign className="scale-50 md:scale-75 rounded-full" />
            </div>
          </div>
        </div>
        <div className="font-semibold text-2xl 2xl:text-3xl">
          Custom Design
        </div>
        <div className="text-gray-500 text-lg 2xl:text-2xl">
          Website kami buat dengan desain khusus dengan karakteristik dan brand bisnis berdasarkan riset mendalam
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
        <div className="font-semibold text-2xl 2xl:text-3xl">
          Modern UI
        </div>
        <div className="text-gray-500 text-lg 2xl:text-2xl">
          Setiap goresan desain anda akan mengikuti trend desain antar muka paling baru
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
          Website anda akan tampil dengan baik pada semua perangkat elektronik moderen
        </div>
      </div>
    </div>
  </div>
}

export default WhyUs
