import React, { useState } from 'react'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import IconLogo from '../assets/icons/logo.svg'
import IconLogoK from '../assets/icons/logoK.svg'
import IconMenu from '../assets/icons/burger.svg'
import IconX from '../assets/icons/x.svg'
import IconMapPin from '../assets/icons/map-pin.svg'

import IconMediumLogo from '../assets/icons/medium-logo.svg'
import IconTwitterLogo from '../assets/icons/twitter-logo.svg'
import IconInstagramLogo from '../assets/icons/instagram-logo.svg'
import IconLinkedInLogo from '../assets/icons/linkedin-logo.svg'

const Navbar = ({ isOverlayVisible, setIsOverlayVisible }) => (
  <nav className="flex flex-col px-20 py-8 space-y-2">
    <div className="relative flex justify-between items-center">
      <Link to="/">
        <IconLogo className="w-32 h-auto" />
      </Link>
      <div className="hidden lg:flex">
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          Services
        </Link>
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          Why Us
        </Link>
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          Works
        </Link>
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          Contact Us
        </Link>
      </div>
      <div className="p-4"></div>
      <div className="absolute top-0 right-0">
        <button
          onClick={() => setIsOverlayVisible(!isOverlayVisible)}
          className="fixed transform -translate-x-full z-30 p-4 bg-white rounded-lg shadow hover:shadow-md focus:outline-none duration-150"
        >
          {!isOverlayVisible && <IconMenu className="w-6 h-6" />}
          {isOverlayVisible && <IconX className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </nav>
)

const NavLink = ({ children, to, animationDelay = 0.1 }) => (
  <Link to={to}>
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 2,
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: animationDelay,
      }}
      className="text-6xl md:text-8xl font-semibold tracking-tighter hover:text-primary duration-150"
    >
      {children}
    </motion.h1>
  </Link>
)

const NavOverlay = () => (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: '100vh' }}
    exit={{ height: 0 }}
    transition={{
      duration: 1,
      ease: [0.19, 1.0, 0.22, 1.0],
    }}
    className="fixed top-0 left-0 w-screen z-20 px-20 overflow-hidden bg-white shadow-lg"
  >
    <div className="mt-8">
      <Link to="/">
        <IconLogo className="w-32 h-auto" />
      </Link>
    </div>
    <div className="mt-28 flex flex-wrap justify-between">
      <nav className="flex flex-col space-y-8">
        <NavLink to="/">Services</NavLink>
        <NavLink to="/" animationDelay={0.2}>
          Why Us
        </NavLink>
        <NavLink to="/" animationDelay={0.3}>
          Works
        </NavLink>
        <NavLink to="/" animationDelay={0.4}>
          About
        </NavLink>
        <NavLink to="/" animationDelay={0.5}>
          Blog
        </NavLink>
        <NavLink to="/" animationDelay={0.6}>
          Contact Us
        </NavLink>
      </nav>
      <footer className="self-end mt-12 md:mt-0 z-20">
        <div className="flex md:justify-end space-x-14">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:fill-current duration-150"
          >
            <IconMediumLogo />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary duration-150"
          >
            <IconTwitterLogo />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary duration-150"
          >
            <IconInstagramLogo />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary duration-150"
          >
            <IconLinkedInLogo />
          </a>
        </div>
        <div className="flex justify-end space-x-4 md:space-x-12 mt-12">
          <p className="font-semibold text-lg md:text-xl">
            © 2021 Studio Karsa
          </p>
          <div className="flex space-x-4">
            <IconMapPin />
            <p className="font-semibold text-lg md:text-xl">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
    <div className="absolute right-0 bottom-0 z-10">
      <IconLogoK />
    </div>
  </motion.div>
)

const Navigation = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  return (
    <>
      <Navbar
        isOverlayVisible={isOverlayVisible}
        setIsOverlayVisible={setIsOverlayVisible}
      />

      <AnimatePresence>{isOverlayVisible && <NavOverlay />}</AnimatePresence>
    </>
  )
}

export default Navigation
