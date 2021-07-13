import React from 'react'
import { Link } from 'gatsby'

import TeamSVG from '../../assets/images/team.svg'
import ArrowSVG from '../../assets/icons/arrow.svg'

const About = () => (
  <div id="section-about" className="flex flex-col px-6 md:px-20 space-y-2">
    <div className="flex flex-col">
      <h2 className="text-2xl lg:text-3xl font-medium text-primary tracking-wide uppercase">
        about
      </h2>
      <h2 className="text-2xl lg:text-4xl font-semibold tracking-wider">
        Who are we?
      </h2>
    </div>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 p-2 md:p-8">
        <TeamSVG className="w-full h-full" />
      </div>
      <div className="flex w-full md:w-1/2 p-2 md:p-8 text-lg 2xl:text-2xl">
        <div className="my-auto">
          <p>We are a remote digital agency based in Jakarta, Indonesia.</p>
          <br />
          <p>
            We are a very new digital agency created by some college students.
            We are a team of 8 people who each have various experiences in IT,
            Software Development and UI / UX Design.
          </p>
          <br />
          <Link
            to="/"
            className="group font-semibold flex flex-row items-center hover:underline"
          >
            Learn More
            <ArrowSVG className="w-5 h-5 ml-12 group-hover:transform group-hover:translate-x-4 duration-200" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default About
