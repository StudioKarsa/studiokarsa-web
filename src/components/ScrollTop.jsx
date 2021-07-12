import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import IconArrowUp from '../assets/icons/arrow-up.svg'
import useScroll from '../hooks/useScroll'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scroll = useScroll({})

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    if (scroll.y > 0) setIsVisible(true)
    else setIsVisible(false)
  }, [scroll.y])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.19, 1.0, 0.22, 1.0],
          }}
          onClick={scrollToTop}
          className="fixed z-50 bottom-0 right-0 m-6 md:m-20 py-3 px-4 bg-black bg-opacity-40 hover:bg-opacity-100 duration-150 text-white rounded-full focus:outline-none"
        >
          <IconArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
