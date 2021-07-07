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
  <nav className="flex flex-col px-6 md:px-20 py-8 space-y-2">
    <div className="relative flex justify-between items-center">
      <Link to="/">
        <IconLogo className="w-24 md:w-32 h-auto" />
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
          className="fixed transform -translate-x-full z-30 p-3 md:p-4 bg-white rounded-lg shadow hover:shadow-md focus:outline-none duration-150"
        >
          {!isOverlayVisible && <IconMenu className="w-4 md:w-6 h-4 md:h-6" />}
          {isOverlayVisible && <IconX className="w-4 md:w-6 h-4 md:h-6" />}
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
      className="text-3xl md:text-6xl lg:text-8xl font-semibold tracking-tighter hover:text-primary duration-150"
    >
      {children}
    </motion.h1>
  </Link>
)

const NavLinks = () => (
  <nav className="flex flex-col space-y-4 md:space-y-8">
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
)

const NavSocialLink = ({ children, to = '#', animationDelay = 0.1 }) => (
  <motion.a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary hover:fill-current duration-150"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{
      duration: 1,
      ease: [0.19, 1.0, 0.22, 1.0],
      delay: animationDelay,
    }}
  >
    {children}
  </motion.a>
)

const NavFooter = () => {
  const socials = [
    { key: '__socials_medium', href: '#', icon: <IconMediumLogo /> },
    { key: '__socials_twitter', href: '#', icon: <IconTwitterLogo /> },
    { key: '__socials_instagram', href: '#', icon: <IconInstagramLogo /> },
    { key: '__socials_linkedin', href: '#', icon: <IconLinkedInLogo /> },
  ]

  return (
    <footer className="self-end mt-12 md:mt-0 z-20">
      <div className="flex md:justify-end space-x-14">
        {socials.map((social, index) => (
          <NavSocialLink animationDelay={0.2 + index * 0.2} key={social.key}>
            {social.icon}
          </NavSocialLink>
        ))}
      </div>
      <div className="flex justify-end space-x-4 md:space-x-12 mt-12">
        <p className="font-semibold text-base md:text-xl">
          © 2021 Studio Karsa
        </p>
        <div className="flex space-x-4">
          <IconMapPin />
          <p className="font-semibold text-base md:text-xl">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}

const NavOverlay = () => (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: '100vh' }}
    exit={{ height: 0 }}
    transition={{
      duration: 1,
      ease: [0.19, 1.0, 0.22, 1.0],
    }}
    className="fixed top-0 left-0 w-screen z-20 px-6 md:px-20 overflow-hidden bg-white shadow-lg"
  >
    <div className="mt-8">
      <Link to="/">
        <IconLogo className="w-24 md:w-32 h-auto" />
      </Link>
    </div>
    <div className="mt-10 md:mt-28 flex flex-wrap justify-between">
      <NavLinks />
      <NavFooter />
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
