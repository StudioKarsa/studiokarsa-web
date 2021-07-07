import React from 'react'

import CustomDesign from '../../assets/icons/custom-design.svg'
import ModernUI from '../../assets/icons/modern-ui.svg'
import MobileFriendly from '../../assets/icons/mobile-friendly.svg'

function WhyUs() {
  return <div className="flex flex-col items-center px-20 space-y-12">
    <div className="flex flex-col text-center">
      <div className="uppercase tracking-wide font-medium text-primary text-2xl">
        why us?
      </div>
      <div className="font-semibold tracking-wider text-2xl lg:text-3xl">
        Creating impactful digital experience
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-evenly w-full space-x-0 space-y-6 lg:space-x-12 lg:space-y-0">
      <div className="flex flex-1 flex-col text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-full">
            <div className="p-1">
              <CustomDesign className="p-4 scale-75 bg-secondary bg-opacity-40 rounded-full" />
            </div>
          </div>
        </div>
        <div className="font-semibold text-xl">
          Custom Design
        </div>
        <div className="text-gray-500">
          Website kami buat dengan desain khusus dengan karakteristik dan brand bisnis berdasarkan riset mendalam
        </div>
      </div>
      <div className="flex flex-1 flex-col text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-full">
            <div className="p-1">
              <ModernUI className="p-4 scale-75 bg-secondary bg-opacity-40 rounded-full" />
            </div>
          </div>
        </div>
        <div className="font-semibold text-xl">
          Modern UI
        </div>
        <div className="text-gray-500">
          Setiap goresan desain anda akan mengikuti trend desain antar muka paling baru
        </div>
      </div>
      <div className="flex flex-1 flex-col text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-full">
            <div className="p-1">
              <MobileFriendly className="p-4 scale-75 bg-secondary bg-opacity-40 rounded-full" />
            </div>
          </div>
        </div>
        <div className="font-semibold text-xl">
          Mobile Friendly
        </div>
        <div className="text-gray-500">
          Website anda akan tampil dengan baik pada semua perangkat elektronik moderen
        </div>
      </div>
    </div>
  </div>
}

export default WhyUs
