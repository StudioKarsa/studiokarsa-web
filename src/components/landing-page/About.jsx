import React from 'react'
import { Link } from 'gatsby'

import TeamSVG from '../../assets/images/team.svg'
import ArrowSVG from '../../assets/icons/arrow.svg'

const About = () => (
  <div className="flex flex-col px-20 py-12 space-y-2 font-sans">
    <div className="flex flex-col space-y-2">
      <h2 className="text-3xl text-primary tracking-widest">ABOUT</h2>
      <h2 className="text-3xl font-semibold tracking-wide">Who are we?</h2>
    </div>
    <div className="flex flex-row justify-between">
      <div className="w-1/2 p-8">
        <TeamSVG className="w-full h-full" />
      </div>
      <div className="flex w-1/2 p-8">
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
