import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import WebSVG from '../../../assets/icons/web-dev.svg'
import FigmaSVG from '../../../assets/icons/figma.svg'
import SEOSVG from '../../../assets/icons/seo.svg'
import MobileSVG from '../../../assets/icons/mobile.svg'

const Services = () => {
  const { t } = useTranslation()
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

  const serviceImageClassName =
    'text-white w-14 h-16 sm:w-16 md:w-24 md:h-24 p-2 md:p-5 flex justify-center group-hover:text-primary group-hover:transform duration-300'
  const services = [
    {
      image: <WebSVG className={serviceImageClassName} />,
      title: t('landingPage.services.contents.uiux.title'),
      description: t('landingPage.services.contents.uiux.description'),
      delay: 0.4
    },
    {
      image: <FigmaSVG className={serviceImageClassName} />,
      title: t('landingPage.services.contents.webDevelopment.title'),
      description: t(
        'landingPage.services.contents.webDevelopment.description'
      ),
      delay: 0.6
    },
    {
      image: <MobileSVG className={serviceImageClassName} />,
      title: t('landingPage.services.contents.mobileDevelopment.title'),
      description: t(
        'landingPage.services.contents.mobileDevelopment.description'
      ),
      delay: 0.8
    },
    {
      image: <SEOSVG className={serviceImageClassName} />,
      title: t('landingPage.services.contents.seo.title'),
      description: t('landingPage.services.contents.seo.description'),
      delay: 1
    },
  ]

  return (
    <div
      id="section-services"
      className="flex flex-col px-6 md:px-20 py-12 gap-y-6 md:gap-y-12 font-sans relative z-20"
    >
      <div className="flex flex-col md:gap-y-4">
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0] }}
          className="text-2xl md:text-3xl text-primary md:tracking-wider uppercase"
        >
          {t('landingPage.services.title')}
        </motion.h2>
        <div>
          <motion.h2
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="text-2xl md:text-3xl font-semibold md:mb-4"
          >
            {t('landingPage.services.subtitle')}
          </motion.h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        {services.map(service => (
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0], delay: service.delay }}
          >
            <Service
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Service = ({ image, title, description }) => (
  <div className="p-6 md:flex group group-hover:transform duration-300 rounded-xl mb-5 lg:mb-0 custom-shadow md:gap-x-5 bg-white hover:bg-primary">
    <div className="w-full justify-center md:w-auto md:justify-start flex mb-4 md:mb-0">
      <div className="bg-primary w-full h-full md:w-24 md:h-24 group-hover:bg-white rounded-xl group-hover:transform duration-300 flex justify-center">
        {image}
        <h3 className="text-base sm:text-xl font-semibold text-white group-hover:text-primary group-hover:transform duration-300 self-center flex md:hidden">
          {title}
        </h3>
      </div>
    </div>
    <div className="md:flex md:flex-wrap md:content-start md:my-1 md:w-full ">
      <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white group-hover:transform duration-300 hidden md:block ">
        {title}
      </h3>
      <p className="text-gray-500 w-full group-hover:text-white group-hover:transform duration-300 md:mt-2">
        {description}
      </p>
    </div>
  </div>
)

export default Services
