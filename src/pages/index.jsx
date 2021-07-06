import * as React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/landing-page/Hero'
import Services from '../components/landing-page/Services'
import WhyUs from '../components/landing-page/WhyUs'
import Works from '../components/landing-page/Works'
import About from '../components/landing-page/About'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const { seoImage } = useStaticQuery(query)

  return (
    <Layout>
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
        image={seoImage.childImageSharp.fixed}
      />

      <Hero />
      <Services />
      <WhyUs />
      <Works />
      <About />
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query HomeSEOImageQuery {
    seoImage: file(relativePath: { eq: "brand-logo.png" }) {
      childImageSharp {
        fixed(height: 1080, width: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
