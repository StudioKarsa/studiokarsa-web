import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import SEO from '../../shared-components/SEO'

const a = props => <a className="text-xl 2xl:text-3xl mb-4 text-blue-700" {...props} />
const p = props => <p className="text-xl 2xl:text-3xl mb-4" {...props} />
const ul = props => <ul className="mx-4 md:mx-12 list-disc" {...props} />
const th = props => <th className="border-2 text-left font-bold p-4" {...props} />
const td = props => <td className="border-2 text-left font-light p-4" {...props} />
const ol = props => <ol className="mx-4 md:mx-12 list-decimal" {...props} />
const hr = props => <hr className="my-4" {...props} />
const h1 = props => (
  <h1 className="font-bold text-5xl 2xl:text-7xl mb-2 md:mb-4" {...props} />
)
const h2 = props => (
  <h2 className="font-bold text-4xl 2xl:text-6xl mb-2 md:mb-4" {...props} />
)
const h3 = props => (
  <h3 className="font-bold text-3xl 2xl:text-5xl mb-2 md:mb-4" {...props} />
)
const h4 = props => (
  <h4 className="font-bold text-2xl 2xl:text-4xl mb-2 md:mb-4" {...props} />
)
const h5 = props => (
  <h5 className="font-bold text-xl 2xl:text-3xl mb-2 md:mb-4" {...props} />
)
const h6 = props => (
  <h6 className="font-bold texl-lg 2xl:text-2xl mb-2 md:mb-4" {...props} />
)
const tbody = props => <tbody className="border" {...props} />
const table = props => (
  <div className="overflow-x-auto">
    <table
      className="table-fixed max-width-96 2xl:max-w-full border-collapse border text-xl mb-4"
      {...props}
    />
  </div>
)
const blockquote = props => (
  <blockquote
    className="border-l-4 border-gray-500 md:mx-12 px-4 my-4"
    {...props}
  />
)
const deckgo_highlight_code = props => (
  <div className="overflow-x-auto">
    <deckgo-highlight-code
      class="deckgo-highlight-code-carbon deckgo-highlight-code-theme-dracula hydrated max-width-96 2xl:max-w-full text-lg 2xl:text-2xl"
      {...props}
    />
  </div>
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
  table,
  tbody,
  blockquote,
  "deckgo-highlight-code": deckgo_highlight_code,
}

const Footer = ({ mdx }) => (
  <div className="my-24 px-6 md:px-32 xl:px-40">
    <div className="grid grid-cols-2 gap-8 sm:shadow-lg rounded-lg">
      <div className="col-span-2 xl:col-span-1 grid grid-cols-6 rounded-lg shadow-lg sm:shadow-none cursor-pointer gap-4 p-6">
        <div className="grid place-items-center col-span-2 hidden sm:flex">
          <div className="bg-red-100 rounded-lg overflow-hidden">
            <GatsbyImage
              className="w-full h-auto rounded-lg"
              alt={mdx.frontmatter.coverAlt}
              image={getImage(mdx.frontmatter.cover)}
            />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 flex flex-col justify-center space-y-2">
          <div className="font-semibold text-gray-500 text-left">Previous Post</div>
          <div className="overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-lg text-gray-900 text-left">
            When something is about to begin, get serious, or put to the test.
          </div>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-1 grid grid-cols-6 rounded-lg shadow-lg sm:shadow-none cursor-pointer gap-4 p-6">
        <div className="col-span-6 sm:col-span-4 flex flex-col justify-center space-y-2">
          <div className="font-semibold text-gray-500 text-right">Next Post</div>
          <div className="overflow-hidden overflow-ellipsis line-clamp-2 font-semibold text-lg text-gray-900 text-right">
            To not work alone, but rather, together with others in order to achieve a certain goal.
          </div>
        </div>
        <div className="grid place-items-center col-span-2 hidden sm:flex">
          <div className="bg-red-100 rounded-lg overflow-hidden">
            <GatsbyImage
              className="w-full h-auto rounded-lg"
              alt={mdx.frontmatter.coverAlt}
              image={getImage(mdx.frontmatter.cover)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PostLayout = ({ data: { mdx } }) => {
  deckDeckGoHighlightElement()

  return (
    <>
      <SEO keywords={mdx.keywords} />

      <div className="overflow-x-hidden space-y-8 my-24 px-6 md:px-32 xl:px-56">
        <div className="space-y-4 md:mx-12">
          <h1 className="flex font-black bg-clip-text bg-gradient-to-r from-red-500 to-secondary md:leading-tight text-4xl md:text-6xl">
            {mdx.frontmatter.title}
          </h1>
          <p className="font-semibold text-gray-800 md:text-2xl">
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
        <div className="overflow-x-auto md:px-12">
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>

      <Footer mdx={mdx} />
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
