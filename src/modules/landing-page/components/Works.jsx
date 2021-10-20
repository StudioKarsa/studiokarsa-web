import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ArrowSVG from '../../../assets/icons/arrow.svg'

function renderProjectImage(project) {
  const projectImage = {
    skillcode: (
      <StaticImage
        src="../../../assets/images/works-macbook-mockup.png"
        alt="First Image"
        className=""
        objectFit="contain"
      />
    ),
    magenta: (
      <StaticImage
        src="../../../assets/images/works-3-iphones-mockup.png"
        alt="Third Image"
        className=""
        objectFit="contain"
      />
    ),
  }

  return projectImage[project]
}

const ProjectLink = ({
  projectKey,
  title,
  description,
  setCurrentProjectImage,
}) => (
  <div
    className="flex flex-col group w-full"
    onMouseOver={() => setCurrentProjectImage(projectKey)}
  >
    <a href="#" className="flex-1 py-4" onClick={e => e.preventDefault()}>
      <h2 className="font-medium text-lg lg:text-xl group-hover:text-primary tracking-wider">
        {title}
      </h2>
      <p className="text-gray-500 text-sm lg:text-lg">{description}</p>
    </a>
  </div>
)

const Works = () => {
  const { t } = useTranslation()
  const [currentProjectImage, setCurrentProjectImage] = useState('skillcode')
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  }

  const projects = [
    {
      key: 'skillcode',
      title: 'Skillcode',
      description: t('landingPage.works.projects.skillcode.description'),
      delay: 0.4,
    },
    {
      key: 'magenta',
      title: 'Magenta',
      description: t('landingPage.works.projects.magenta.description'),
      delay: 0.6,
    },
  ]

  return (
    <div
      id="section-works"
      className="flex flex-col px-6 md:px-20 py-12 relative z-20"
    >
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0] }}
        className="flex flex-col md:space-y-2"
      >
        <h2 className="text-2xl md:text-3xl text-primary tracking-widest uppercase">
          {t('landingPage.works.title')}
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t('landingPage.works.subtitle')}
        </h2>
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row justify-around space-y-2 relative z-50">
        <div className="flex flex-col mt-10 lg:w-1/3">
          <div className="my-auto space-y-2">
            <div className="flex flex-col divide-y-2 divide-solid divide-opacity-25">
              {projects.map(project => (
                <motion.div
                  key={project.key}
                  ref={ref}
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 3.2,
                    ease: [0.19, 1.0, 0.22, 1.0],
                    delay: project.delay,
                  }}
                >
                  <ProjectLink
                    projectKey={project.key}
                    title={project.title}
                    description={project.description}
                    setCurrentProjectImage={setCurrentProjectImage}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              ref={ref}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 3.2,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1,
              }}
            >
              <Link
                to="/"
                className="group flex flex-row items-center font-semibold text-lg lg:text-xl hover:underline"
              >
                {t('common.seeMore')}
                <ArrowSVG className="w-5 h-5 ml-12 group-hover:transform group-hover:translate-x-4 duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          variants={fadeLeft}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 3.2,
            ease: [0.19, 1.0, 0.22, 1.0],
            delay: 1.2,
          }}
          className="flex w-full lg:w-2/3 justify-center lg:max-h-96"
        >
          {renderProjectImage(currentProjectImage)}
        </motion.div>
      </div>
    </div>
  )
}

export default Works
