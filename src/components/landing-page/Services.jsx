import React from 'react'
import WebSVG from '../../assets/icons/web-dev.svg'
import FigmaSVG from '../../assets/icons/figma.svg'
import ServerSVG from '../../assets/icons/server.svg'

const Services = () => (
  <div className="flex flex-col px-20 py-12 gap-y-12 font-sans">
    <div className="flex flex-col gap-y-4">
      <h2 className="text-3xl text-primary tracking-wider uppercase">Services</h2>
      <div>
        <h2 className="text-5xl font-semibold mb-4">We bring your ideas</h2>
        <h2 className="text-5xl font-semibold">into reality</h2>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-12">
      <div className="p-10 group rounded-xl mt-4 custom-shadow flex gap-x-5 hover:bg-primary">
        <div className=" bg-primary group-hover:bg-white rounded-xl">
          <FigmaSVG className="w-28 h-28 p-6 text-white group-hover:text-primary" />
        </div>
        <div className="place-content-around grid w-full">
          <h2 className="w-full text-3xl font-semibold group-hover:text-white">
            UI/UX Design
          </h2>
          <p className="text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-10 group rounded-xl mt-4 custom-shadow flex gap-x-5 hover:bg-primary">
        <div className=" bg-primary group-hover:bg-white rounded-xl">
          <WebSVG className="w-28 h-28 p-6 text-white group-hover:text-primary" />
        </div>
        <div className="place-content-around grid w-full">
          <h2 className="w-full text-3xl font-semibold group-hover:text-white">
            Web Development
          </h2>
          <p className="text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-10 group rounded-xl mt-4 custom-shadow flex gap-x-5 hover:bg-primary">
        <div className=" bg-primary group-hover:bg-white rounded-xl">
          <WebSVG className="w-28 h-28 p-6 text-white group-hover:text-primary" />
        </div>
        <div className="place-content-around grid w-full">
          <h2 className="w-full text-3xl font-semibold group-hover:text-white">
            Web Development
          </h2>
          <p className="text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
      <div className="p-10 group rounded-xl mt-4 custom-shadow flex gap-x-5 hover:bg-primary">
        <div className=" bg-primary group-hover:bg-white rounded-xl">
          <ServerSVG className="w-28 h-28 p-6 text-white group-hover:text-primary" />
        </div>
        <div className="place-content-around grid w-full">
          <h2 className="w-full text-3xl font-semibold group-hover:text-white">
            Cloud Computing
          </h2>
          <p className="text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing it amet consectetur{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Services
