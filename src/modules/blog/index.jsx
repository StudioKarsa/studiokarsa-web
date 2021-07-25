import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

import SEO from '../../shared-components/SEO'

const Page = () => {
  const {
    file,
    allMdx: { edges },
  } = useStaticQuery(query)

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

      {/* Blog post cards */}
      {edges.map(({ node: { id, frontmatter } }) => (
        <Link to={frontmatter.slug} key={id}>
          <GatsbyImage
            image={getImage(frontmatter.cover)}
            alt={frontmatter.coverAlt}
          />
          <p>{frontmatter.date}</p>
          <p>{frontmatter.category}</p>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.desc}</p>
        </Link>
      ))}
    </>
  )
}

export default Page

const query = graphql`
  query BlogQuery {
    # SEO Image query
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

    # Blog posts query
    allMdx {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            desc
            category
            date(formatString: "MMMM DD, YYYY")
            coverAlt
            cover {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
