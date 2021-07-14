import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ArrowSVG from '../../assets/icons/arrow.svg'

const Works = () => {
  const [currentProjectImage, setCurrentProjectImage] = useState('skillcode')

  function renderProjectImage(project) {
    const projectImage = {
      skillcode: (
        <StaticImage
          src="../../assets/images/works-macbook-mockup.png"
          alt="First Image"
          className=""
          objectFit="contain"
        />
      ),
      sikepo: (
        <StaticImage
          src="../../assets/images/works-2-iphones-mockup.png"
          alt="Second Image"
          className=""
          objectFit="contain"
        />
      ),
      magenta: (
        <StaticImage
          src="../../assets/images/works-3-iphones-mockup.png"
          alt="Third Image"
          className=""
          objectFit="contain"
        />
      ),
    }

    return projectImage[project]
  }

  return (
    <div id="section-works" className="flex flex-col px-6 md:px-20 py-12 relative z-20">
      <div className="flex flex-col md:space-y-2">
        <h2 className="text-2xl md:text-3xl text-primary tracking-widest uppercase">
          Works
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Featured Projects
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around space-y-2 relative z-50">
        <div className="flex flex-col mt-10 lg:w-1/3">
          <div className="my-auto space-y-2">
            <div className="flex flex-col divide-y-2 divide-solid divide-opacity-25">
              <div
                className="flex flex-col group w-full"
                onMouseOver={() => setCurrentProjectImage('skillcode')}
              >
                <a href="#" className="flex-1 py-4" onClick={e => e.preventDefault()}>
                  <h2 className="font-medium text-lg lg:text-xl group-hover:text-primary tracking-wider">Skillcode</h2>
                  <p className="text-gray-500 text-sm lg:text-lg">
                    Test your programming skills
                  </p>
                </a>
              </div>
              <div
                className="flex flex-col group w-full"
                onMouseOver={() => setCurrentProjectImage('sikepo')}
              >
                <a href="#" className="flex-1 py-4" onClick={e => e.preventDefault()}>
                  <h2 className="font-medium text-lg lg:text-xl group-hover:text-primary tracking-wider">Sikepo</h2>
                  <p className="text-gray-500 text-sm lg:text-lg">
                    Vote your school's next student council leader
                  </p>
                </a>
              </div>
              <div
                className="flex flex-col group w-full"
                onMouseOver={() => setCurrentProjectImage('magenta')}
              >
                <a href="#" className="flex-1 py-4" onClick={e => e.preventDefault()}>
                  <h2 className="font-medium text-lg lg:text-xl group-hover:text-primary tracking-wider">Magenta</h2>
                  <p className="text-gray-500 text-sm lg:text-lg">
                    Your next social networking platform
                  </p>
                </a>
              </div>
            </div>
            <div>
              <Link
                to="/"
                className="group flex flex-row items-center font-semibold text-lg lg:text-xl hover:underline"
              >
                See More
                <ArrowSVG className="w-5 h-5 ml-12 group-hover:transform group-hover:translate-x-4 duration-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-2/3 justify-center lg:max-h-96">
          {renderProjectImage(currentProjectImage)}
        </div>
      </div>
    </div>
  )
}

export default Works