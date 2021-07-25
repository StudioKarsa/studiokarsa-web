import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../../shared-components/SEO'

const PostLayout = ({ data: { mdx } }) => (
  <>
    <SEO keywords={mdx.keywords} />

    <h1 className="text-6xl">{mdx.frontmatter.title}</h1>
    <p>{mdx.frontmatter.date}</p>

    {/* Blog post cover image */}
    <GatsbyImage alt={mdx.frontmatter.coverAlt} image={getImage(mdx.frontmatter.cover)} />

    {/* Blog post content */}
    <MDXProvider>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </>
)

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
            gatsbyImageData(
              layout: FIXED
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
