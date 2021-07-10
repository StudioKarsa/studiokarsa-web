import React from 'react'
import WebSVG from '../../assets/icons/web-dev.svg'
import FigmaSVG from '../../assets/icons/figma.svg'
import ServerSVG from '../../assets/icons/server.svg'

const Services = () => (
  <div className="flex flex-col px-6 md:px-20 py-12 gap-y-6 md:gap-y-12 font-sans">
    <div className="flex flex-col md:gap-y-4">
      <h2 className="text-2xl md:text-3xl text-primary md:tracking-wider uppercase">Services</h2>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold md:mb-4">We bring your ideas into reality</h2>
      </div>
    </div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
      <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 hover:bg-primary">
        <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
          <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 justify-center flex">
            <FigmaSVG className="text-white w-16 h-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
          </div>
        </div>
        <div className="md:place-content-around md:grid md:w-full">
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300">
            UI/UX Design
          </h3>
          <p className="text-gray-500 group-hover:text-white group-hover:transform duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 hover:bg-primary">
        <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
          <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 flex justify-center">
            <WebSVG className="text-white w-16 h-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
          </div>
        </div>
        <div className="md:place-content-around md:grid md:w-full">
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300">
            Web Development
          </h3>
          <p className="text-gray-500 group-hover:text-white group-hover:transform duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 hover:bg-primary">
        <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
          <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 flex justify-center">
            <WebSVG className="text-white w-16 h-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
          </div>
        </div>
        <div className="md:place-content-around md:grid md:w-full">
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300">
            Web Development
          </h3>
          <p className="text-gray-500 group-hover:text-white group-hover:transform duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 hover:bg-primary">
        <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
          <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 flex justify-center">
            <ServerSVG className="text-white w-16 h-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
          </div>
        </div>
        <div className="md:place-content-around md:grid md:w-full">
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300">
            Cloud Computing
          </h3>
          <p className="text-gray-500 group-hover:text-white group-hover:transform duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Services
