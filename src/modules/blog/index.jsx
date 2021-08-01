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
  const category = [
    'Books',
    'Design',
    'Development',
    'Event',
    'Job and Career',
    'Mobile',
    'Productivity',
    'Website'
  ]

  const firstPostId = edges[0].node.id
  const firstPost = edges[0].node.frontmatter
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

      {<div className="flex flex-col m-12 lg:mx-20 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-serif font-extrabold tracking-wide my-4 text-3xl lg:text-5xl lg:w-2/5">Studio Karsa Blog</h1>
          <p className="font-sans font-medium my-4 text-lg lg:text-2xl lg:w-5/6">
            A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <input type="text"
                className="shadow-inner bg-gray-200
                           rounded-full outline-none
                           py-3 px-5 m-3 w-2/5 xl:w-1/3"
                placeholder="Search..."
          />
          <div className="grid grid-cols-4 gap-3 items-center">
            {category.map((item) => (
              <button className="hover:shadow-inner hover:bg-gray-200
                                 border-2 rounded-full
                                 outline-none ring-offset-transparent text-gray-400
                                 py-1 px-2">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>}

      {/* First Post Card */}
      {<Link to={firstPost.slug} key={firstPostId}>
        <div className="flex flex-row justify-center">
            <div className="flex md:flex-row flex-col shadow-2xl mx-12 my-6 p-4 rounded-xl w-5/6 ">
              <div className="flex flex-col justify-center">
                <GatsbyImage
                  image={getImage(firstPost.cover)}
                  alt={firstPost.coverAlt}
                  className="rounded-xl"
                  />
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="flex flex-row">
                  <p className="mr-1 text-primary font-bold">{firstPost.category}</p> •
                  <p className="ml-1 text-gray-500">{firstPost.date}</p>
                </div>
                <h1 className="font-extrabold text-2xl w-3/5">{firstPost.title}</h1>
                <p className="text-gray-400 text-xl">{firstPost.desc}</p>
              </div>
            </div>
        </div>
      </Link>}

      {/* Blog post cards */}
      <div className="flex flex-row justify-center my-10">
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-6 w-5/6 mx-12">
          {edges.map(({ node: { id, frontmatter } }) => (
              <Link to={frontmatter.slug} key={id}>
                  <div className="flex flex-col hover:shadow-2xl p-4 rounded-xl w-2/5 h-full lg:w-full">
                      <div className="flex justify-center">
                        <GatsbyImage
                          image={getImage(frontmatter.cover)}
                          alt={frontmatter.coverAlt}
                          className="rounded-xl"
                          />
                      </div>
                      <div className="flex flex-col justify-center mx-3 my-2">
                        <div className="flex flex-row">
                          <p className="mr-1 text-primary font-bold">{frontmatter.category}</p> •
                          <p className="ml-1 text-gray-500">{frontmatter.date}</p>
                        </div>
                        <h1 className="font-extrabold text-xl my-2">{frontmatter.title.substr(0, 45) + "..."}</h1>
                        <p className="text-gray-400 text-lg">{frontmatter.desc}</p>
                      </div>
                  </div>
              </Link>
          ))}
        </div>
      </div>
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
                  height: 400
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
