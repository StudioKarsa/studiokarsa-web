import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { isBrowser } from '../utils/constants'
import useScroll from '../hooks/useScroll'

import IconArrowUp from '../assets/icons/arrow-up.svg'

const ScrollTop = () => {
  const ANIMATION_VARIANT_TYPE = {
    SCROLL: 'SCROLL',
    AT_BOTTOM: 'AT_BOTTOM',
  }

  const variants = {
    [ANIMATION_VARIANT_TYPE.SCROLL]: {
      opacity: 1,
    },
    [ANIMATION_VARIANT_TYPE.AT_BOTTOM]: {
      opacity: 1,
      y: -100,
    },
  }

  const [isVisible, setIsVisible] = useState(false)
  const [currentAnimationVariant, setCurrentAnimationVariant] = useState(
    ANIMATION_VARIANT_TYPE.SCROLL
  )

  const scroll = useScroll({})

  const scrollToTop = () => {
    if (isBrowser) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (scroll.y > 0) {
      setIsVisible(true)
      setCurrentAnimationVariant(ANIMATION_VARIANT_TYPE.SCROLL)

      // Prevent the button from overlapping footer social media icons
      // whenever the user has scrolled to the bottom of the page
      if (isBrowser) {
        window.addEventListener('scroll', () => {
          // source: https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom#comment116566745_9439807
          if (
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.body.scrollHeight
          )
            setCurrentAnimationVariant(ANIMATION_VARIANT_TYPE.AT_BOTTOM)
        })
      }
    } else {
      // Hide the button if the user is at the top of the page
      setIsVisible(false)
    }

    return () => {
      if (isBrowser)
        window.removeEventListener('scroll', () => {
          if (
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.body.scrollHeight
          )
            setCurrentAnimationVariant(ANIMATION_VARIANT_TYPE.AT_BOTTOM)
        })
    }
  }, [scroll.y])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 0 }}
          animate={currentAnimationVariant}
          exit={{ opacity: 0 }}
          variants={variants}
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
