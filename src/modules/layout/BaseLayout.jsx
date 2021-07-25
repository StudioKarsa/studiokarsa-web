/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../../shared-components/Navigation'
import Footer from '../../shared-components/Footer'
import ScrollTop from '../../shared-components/ScrollTop'
import { withTrans } from '../../i18n/withTrans'

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main className="relative h-screen">
      {children}
      <Footer />
      <ScrollTop />
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
