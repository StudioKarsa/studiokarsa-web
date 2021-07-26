import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import SEO from '../../shared-components/SEO'

const p = props => <p className="text-xl mb-4" {...props} />
const a = props => <a className="text-xl text-blue-700" {...props} />
const h1 = props => <h1 className="font-bold mb-2 text-5xl" {...props} />
const h2 = props => <h2 className="font-bold mb-2 text-4xl" {...props} />
const h3 = props => <h3 className="font-bold mb-2 text-3xl" {...props} />
const h4 = props => <h4 className="font-bold mb-2 text-2xl" {...props} />
const h5 = props => <h5 className="font-bold mb-2 text-xl" {...props} />
const h6 = props => <h6 className="font-bold mb-2 texl-lg" {...props} />
const hr = props => <hr className="my-4" {...props} />
const th = props => (
  <th className="font-bold border-2 text-left p-4" {...props} />
)
const td = props => (
  <td className="font-light border-2 text-left p-4" {...props} />
)
const ul = props => <ul className="list-disc mx-4 md:mx-12" {...props} />
const ol = props => <ol className="list-decimal mx-4 md:mx-12" {...props} />
const pre = props => <pre className="overflow-x-auto text-xl" {...props} />
const tbody = props => <tbody className="border" {...props} />
const table = props => (
  <table
    className="table-auto border-collapse border overflow-x-scroll text-xl mb-4"
    {...props}
  />
)
const blockquote = props => (
  <blockquote
    className="border-l-4 border-gray-500 md:mx-12 px-4 my-4"
    {...props}
  />
)

const components = {
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  ul,
  ol,
  th,
  td,
  pre,
  table,
  tbody,
  blockquote,
}
const PostLayout = ({ data: { mdx } }) => {
  deckDeckGoHighlightElement()

  return (
    <>
      <SEO keywords={mdx.keywords} />

      <div className="overflow-x-hidden space-y-8 my-24 px-6 md:px-32 xl:px-56">
        <div className="space-y-4 md:mx-12">
          <h1 className="flex font-black bg-clip-text bg-gradient-to-r from-red-500 to-secondary text-2xl md:text-6xl">
            {mdx.frontmatter.title}
          </h1>
          <p className="font-semibold text-gray-800">
            Updated {mdx.frontmatter.date}
          </p>
        </div>

        {/* Blog post cover image */}
        <GatsbyImage
          className="w-full h-auto rounded-lg"
          alt={mdx.frontmatter.coverAlt}
          image={getImage(mdx.frontmatter.cover)}
        />

        {/* Blog post content */}
        <div className="overflow-x-auto md:mx-12">
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </>
  )
}

export default PostLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        keywords
        date(formatString: "MMMM DD, YYYY")
        coverAlt
        cover {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
