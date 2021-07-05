import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import Hero from '../components/landing-page/Hero'
import Services from '../components/landing-page/Services'
import WhyUs from '../components/landing-page/WhyUs'
import Works from '../components/landing-page/Works'
import About from '../components/landing-page/About'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Hero />
    <Services />
    <WhyUs />
    <Works />
    <About />
  </Layout>
)

export default IndexPage
