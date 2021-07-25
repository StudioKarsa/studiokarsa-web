import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, getSrc } from 'gatsby-plugin-image'

import SEO from '../../shared-components/SEO'

import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Works from './components/Works'
import About from './components/About'

const Page = () => {
  const { file } = useStaticQuery(query)

  const seoImage = getImage(file)
  const seoImageSRC = getSrc(file)

  return (
    <>
      <SEO
        title="Home"
        keywords={[
          'Digital Agency',
          'digital agency indonesia',
          'indonesian digital agency',
          'designers',
          'indonesian designers',
          'designer indonesia',
          'web developer',
          'web developers',
          'web developer indonesia',
          'ui/ux',
          'ui/ux indonesia',
          'ui ux',
          'ui ux indonesia',
        ]}
        image={seoImage}
        imageSRC={seoImageSRC}
      />

      <Hero />
      <Services />
      <WhyUs />
      <Works />
      <About />
    </>
  )
}

export default Page

const query = graphql`
  query HomeSEOImageQuery {
    file(relativePath: { eq: "brand-logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
