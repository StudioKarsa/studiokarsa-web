/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navigation from './Navigation'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

const Layout = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Navigation />
      <main className="relative h-screen">
        {children}
        <Footer />
        <ScrollTop />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
