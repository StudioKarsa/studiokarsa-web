import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ArrowSVG from '../../assets/icons/arrow.svg'



const Works = () => {
  const [currentImage, setCurrentImage] = useState("skillcode")

  function imageRender(project) {
    const project_image = {
      "skillcode": <StaticImage
                      src="../../assets/images/works-macbook-mockup.png"
                      alt="First Image"
                      className="w-full h-auto"
                    />,
      "sikepo": <StaticImage
                  src="../../assets/images/works-2-iphones-mockup.png"
                  alt="Second Image"
                />,
      "magenta": <StaticImage
                    src="../../assets/images/works-3-iphones-mockup.png"
                    alt="Third Image"
                  />,
    }
  
    return project_image[project]
  }
  
  return (
    <div className="flex flex-col px-6 md:px-20 py-12">
      <div className="flex flex-col md:space-y-2">
          <h2 className="text-2xl md:text-3xl text-primary tracking-widest uppercase">Works</h2>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around">
        <div className="flex flex-col lg:w-1/3 md:p-4">
          <div className="my-auto">
            <div className="grid grid-cols-1 divide-y-2 divide-solid divide-opacity-25">
              <div className="py-4" onMouseOver={() => setCurrentImage("skillcode")}>
                <a href="#" className="text-lg lg:text-xl tracking-wider font-medium hover:text-primary">Skillcode</a>
                  <p className="text-gray-500 text-sm lg:text-md">Test your programming skills</p>
              </div>
              <div className="py-4" onMouseOver={() => setCurrentImage("sikepo")}>
                <a href="#" className="text-lg lg:text-xl tracking-wider font-medium hover:text-primary">Sikepo</a>
                  <p className="text-gray-500 text-sm lg:text-md">Vote your school's next student council leader</p>
              </div>            
              <div className="py-4" onMouseOver={() => setCurrentImage("magenta")}>
                <a href="#" className="text-lg lg:text-xl tracking-wider font-medium hover:text-primary">Magenta</a>
                  <p className="text-gray-500 text-sm lg:text-md">Your next social networking platform</p>
              </div>
            </div>
            <div>
              <Link
                to="/"
                className="group font-semibold flex flex-row items-center hover:underline"
                >
                See More
                <ArrowSVG className="w-5 h-5 ml-12 group-hover:transform group-hover:translate-x-4 duration-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 my-auto">
          {imageRender(currentImage)}
        </div>
      </div>
    </div>
  );
}



export default Works
