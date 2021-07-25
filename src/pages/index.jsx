import * as React from 'react'
import { getImage, getSrc } from 'gatsby-plugin-image'

import SEO from '../components/SEO'

import Hero from '../components/landing-page/Hero'
import Services from '../components/landing-page/Services'
import WhyUs from '../components/landing-page/WhyUs'
import Works from '../components/landing-page/Works'
import About from '../components/landing-page/About'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
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

export default IndexPage

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
