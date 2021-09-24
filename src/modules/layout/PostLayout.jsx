import React, { useRef } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import SEO from '../../shared-components/SEO'

import IconFacebookLogo from '../../assets/icons/facebook-logo.svg'
import IconTwitterLogo from '../../assets/icons/twitter-logo.svg'
import IconSendLogo from '../../assets/icons/send-logo.svg'
import IconShareLogo from '../../assets/icons/share-logo.svg'

const a = props => (
  <a className="text-lg 2xl:text-2xl py-4 text-blue-700" {...props} />
)
const p = props => <p className="text-lg 2xl:text-2xl my-4" {...props} />
const ul = props => <ul className="mx-4 md:mx-12 list-disc" {...props} />
const th = props => (
  <th className="border-2 text-left font-bold p-4" {...props} />
)
const td = props => (
  <td className="border-2 text-left font-light p-4" {...props} />
)
const ol = props => <ol className="mx-4 md:mx-12 list-decimal" {...props} />
const hr = props => <hr className="py-4" {...props} />
const h1 = props => (
  <h1
    className="font-bold leading-tight 2xl:leading-snug text-4xl 2xl:text-5xl pt-6"
    {...props}
  />
)
const h2 = props => (
  <h2
    className="font-bold leading-tight 2xl:leading-snug text-3xl 2xl:text-4xl pt-6"
    {...props}
  />
)
const h3 = props => (
  <h3
    className="font-bold leading-tight 2xl:leading-snug text-2xl 2xl:text-3xl pt-6"
    {...props}
  />
)
const h4 = props => (
  <h4
    className="font-bold leading-tight 2xl:leading-snug text-xl 2xl:text-2xl pt-6"
    {...props}
  />
)
const h5 = props => (
  <h5
    className="font-bold leading-tight 2xl:leading-snug text-lg 2xl:text-xl pt-6"
    {...props}
  />
)
const h6 = props => (
  <h6
    className="font-bold leading-tight 2xl:leading-snug text-base 2xl:text-lg pt-6"
    {...props}
  />
)
const inlineCode = props => (
  <code
    className="bg-gray-200 rounded text-lg 2xl:text-xl px-4 py-1"
    {...props}
  />
)
const tbody = props => <tbody className="border" {...props} />
const table = props => (
  <div className="overflow-x-auto">
    <table
      className="table-fixed max-width-96 2xl:max-w-full border-collapse border text-xl py-4"
      {...props}
    />
  </div>
)
const blockquote = props => (
  <blockquote className="border-l-4 border-gray-500 md:mx-12 px-4" {...props} />
)
const deckgo_highlight_code = props => (
  <div className="overflow-x-hidden">
    <deckgo-highlight-code
      class="deckgo-highlight-code-carbon deckgo-highlight-code-theme-dracula hydrated text-lg 2xl:text-2xl"
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
  inlineCode,
  table,
  tbody,
  blockquote,
  'deckgo-highlight-code': deckgo_highlight_code,
}

const Footer = ({ pageContext }) => {
  const next = pageContext.next
    ? {
        url: `${pageContext.next.frontmatter.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null

  const prev = pageContext.prev
    ? {
        url: `${pageContext.prev.frontmatter.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null

  return (
    <div className="my-24 px-6 md:px-28">
      <div
        className={`grid grid-cols-2 gap-8 rounded-3xl shadow-none ${
          prev && next ? 'md:shadow-lg' : ''
        }`}
      >
        {prev ? (
          <Link
            to={prev.url}
            className={`col-span-2 md:col-span-1 flex space-x-4 rounded-3xl cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 ${
              prev && next ? 'shadow-lg md:shadow-none' : 'shadow-lg'
            }`}
          >
            <div className="col-span-2 lg:grid place-items-center hidden">
              <GatsbyImage
                className="w-28 h-28 rounded-3xl"
                alt={pageContext.prev.frontmatter.coverAlt}
                image={getImage(pageContext.prev.frontmatter.cover)}
              />
            </div>
            <div className="col-span-5 lg:col-span-4 flex flex-col justify-center space-y-2">
              <div className="font-medium text-sm text-gray-500 text-left">
                Previous Post
              </div>
              <div className="font-semibold text-left text-lg text-gray-800 overflow-hidden overflow-ellipsis line-clamp-2">
                {prev.title}
              </div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {next && (
          <Link
            to={next.url}
            className={`col-span-2 md:col-span-1 flex flex-row-reverse rounded-3xl cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 ${
              prev && next ? 'shadow-lg md:shadow-none' : 'shadow-lg'
            }`}
          >
            <div className="lg:grid place-items-center hidden ml-4">
              <GatsbyImage
                className="w-28 h-28 rounded-3xl"
                alt={pageContext.next.frontmatter.coverAlt}
                image={getImage(pageContext.next.frontmatter.cover)}
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="font-medium text-sm text-gray-500 text-right">
                Next Post
              </div>
              <div className="font-semibold text-right text-lg text-gray-800 overflow-hidden overflow-ellipsis line-clamp-2">
                {next.title}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

const PostLayout = ({ data: { mdx }, pageContext }) => {
  deckDeckGoHighlightElement()
  const tooltip = useRef(null)

  function copyURLLocation() {
    tooltip.current.classList.remove('invisible')
    navigator.clipboard.writeText(window.location.href)

    setTimeout(function () {
      tooltip.current.classList.add('invisible')
    }, 1000)
  }

  return (
    <>
      <SEO keywords={mdx.keywords} />

      <div className="hidden md:flex flex-col space-y-1 fixed left-6">
        <div className="cursor-pointer text-xs p-2" title="share this post">
          <span>share</span>
        </div>
        <div className="cursor-pointer p-2" title="facebook">
          <IconFacebookLogo className="transform scale-90 fill-current hover:text-primary hover:fill-current duration-150 stroke-0" />
        </div>
        <div className="cursor-pointer p-2" title="twitter">
          <IconTwitterLogo className="transform scale-90 fill-current hover:text-primary hover:fill-current duration-150 stroke-0" />
        </div>
        <div className="cursor-pointer p-2" title="send">
          <IconSendLogo className="transform scale-90 fill-current hover:text-primary hover:fill-current duration-150 stroke-0" />
        </div>
        <div
          className="relative inline-block cursor-pointer p-2"
          title="share"
          onClick={copyURLLocation}
        >
          <IconShareLogo className="transform scale-90 fill-current hover:text-primary hover:fill-current duration-150 stroke-1" />
          <span className="tooltiptext invisible after:absolute after:mt-[-5px] after:top-1/2 after:right-full after:border-solid after:border-[4px] after:border-triangles absolute z-[999] top-[8px] left-[110%] bg-[#111827] w-auto text-white text-center rounded-md text-xs px-2 py-1" ref={tooltip}>
            Copied!
          </span>
        </div>
      </div>

      <div className="overflow-x-hidden space-y-8 my-12 md:my-24 px-6 md:px-56 xl:px-56">
        <div className="space-y-4 md:mx-12">
          <h1 className="font-black leading-tight md:leading-tight 2xl:leading-snug text-4xl 2xl:text-5xl">
            {mdx.frontmatter.title}
          </h1>
          <div className="flex md:items-center flex-col space-y-2 md:flex-row md:space-y-0 justify-between">
            <p className="font-medium text-gray-600 md:text-lg 2xl:text-2xl">
              Updated {mdx.frontmatter.date}
            </p>
            <div className="flex space-x-4">
              <div className="bg-red-500 rounded-lg text-white text-sm md:text-base px-4 py-1">
                technology
              </div>
              <div className="bg-gray-500 rounded-lg text-white text-sm md:text-base px-4 py-1">
                reactJS
              </div>
            </div>
          </div>
        </div>
        <GatsbyImage
          className="w-full h-auto rounded-xl"
          alt={mdx.frontmatter.coverAlt}
          image={getImage(mdx.frontmatter.cover)}
        />

        <div className="overflow-x-auto md:mx-32">
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>

      <Footer pageContext={pageContext} />
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
