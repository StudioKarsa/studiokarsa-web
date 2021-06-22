import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-9xl font-black">
      Studio Karsa
    </h1>

    <p className="text-secondary underline">
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
