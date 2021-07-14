import React from 'react'
import WebSVG from '../../assets/icons/web-dev.svg'
import FigmaSVG from '../../assets/icons/figma.svg'
import SEOSVG from '../../assets/icons/seo.svg'
import Mobile from '../../assets/icons/mobile.svg'

const Services = () => (
  <div
    id="section-services"
    className="flex flex-col px-6 md:px-20 py-12 gap-y-6 md:gap-y-12 font-sans relative z-20"
  >
    <div className="flex flex-col md:gap-y-4">
      <h2 className="text-2xl md:text-3xl text-primary md:tracking-wider uppercase">
        Services
      </h2>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold md:mb-4">
          We bring your ideas into reality
        </h2>
      </div>
    </div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
      <Service
        svg="FigmaSVG"
        title="UI/UX Design"
        desc="We create beautiful, functional and easy to use interfaces for your projects"
      />
      <Service
        svg="WebSVG"
        title="Web Development"
        desc="We build the best web applications using the best tools and techniques"
      />
      <Service
        svg="Mobile"
        title="Mobile Development"
        desc="We make your mobile apps look great and run smooth"
      />
      <Service
        svg="SEOSVG"
        title="SEO"
        desc="We help you find your content and increase your SEO score"
      />
    </div>
  </div>
)

const Service = props => {
  let icon
  if (props.svg === 'FigmaSVG') {
    icon = (
      <FigmaSVG className="text-white w-14 h-16 sm:w-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
    )
  } else if (props.svg === 'WebSVG') {
    icon = (
      <WebSVG className="text-white w-14 h-16 sm:w-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
    )
  } else if (props.svg === 'Mobile') {
    icon = (
      <Mobile className="text-white w-14 h-16 sm:w-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
    )
  } else {
    icon = (
      <SEOSVG className="text-white w-14 h-16 sm:w-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300" />
    )
  }

  return (
    <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 bg-white hover:bg-primary">
      <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
        <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 flex justify-center">
          {icon}
          <h3 className="text-base sm:text-xl font-semibold text-white group-hover:text-primary group-hover:transform duration-300 self-center flex md:hidden">
            {props.title}
          </h3>
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:content-start md:my-1 md:w-full ">
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300 hidden md:block ">
          {props.title}
        </h3>
        <p className="text-gray-500 w-full group-hover:text-white group-hover:transform duration-300 md:mt-2">
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default Services
