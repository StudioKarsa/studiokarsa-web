import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import SearchBar from '../../shared-components/Search'

import SEO from '../../shared-components/SEO'
import CloseSVG from '../../assets/icons/x.svg'

const Page = () => {
  const {
    file,
    allMdx: { edges },
    localSearchPages: { index, store },
  } = useStaticQuery(query)

  const { search } =
    typeof window !== undefined ? window.location : null

  const queries = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(queries || '')

  const results = useFlexSearch(searchQuery, index, store)

  const seoImage = getImage(file)
  const seoImageSRC = getSrc(file)
  const categories = [
    'Books',
    'Design',
    'Development',
    'Event',
    'Job and Career',
    'Mobile',
    'Productivity',
    'Website',
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

      {
        <div className="flex flex-col m-12 lg:mx-20 text-center">
          <div className="flex flex-col items-center">
            <h1
              className="flex justify-center font-serif
                         font-extrabold tracking-wide my-4
                         text-4xl lg:text-5xl lg:w-2/5"
            >
              Studio Karsa Blog
            </h1>
            <p
              className="hidden md:flex justify-center
                        font-sans font-medium my-4
                        text-2xl lg:w-5/6"
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {results.map(result => (
              <div className="py-4 border-b">
                <p>{result.slug}</p>
                <p>{result.title}</p>
              </div>
            ))}
            <div className="flex flex-row justify-center items-center w-full text-lg lg:text-xl">
              <div className="flex justify-start mx-2 md:hidden">Recently</div>
              <div className="overflow-x-scroll md:overflow-hidden">
                <div className="flex flex-row md:grid md:grid-cols-4 gap-3 p-4">
                  {categories.map((item, index) => (
                    <div
                      className="relative flex items-center justify-center"
                      key={index}
                    >
                      <div className="static w-full">
                        <button className="group group-hover:shadow-inner group-hover:bg-gray-200 focus:outline-none focus:bg-gray-200 text-gray-400 border-2 rounded-full outline-none md:py-1 px-2 whitespace-nowrap w-full">
                          <span className="absolute flex justify-center -top-3 -right-3 opacity-0 group-focus:opacity-100 bg-white border-2 rounded-full">
                            <CloseSVG className="w-1/3" />
                          </span>
                          {item}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* First Post Card */}
      {
        <Link to={firstPost.slug} key={firstPostId}>
          <div className="flex flex-row justify-center">
            <div
              className="flex lg:flex-row flex-col
                          shadow-2xl mx-12 my-6 p-4
                          rounded-xl w-5/6 "
            >
              <div className="flex justify-center">
                <GatsbyImage
                  image={getImage(firstPost.cover)}
                  alt={firstPost.coverAlt}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="flex flex-row">
                  <p className="mr-1 text-primary font-bold text-lg">
                    {firstPost.category}
                  </p>{' '}
                  •
                  <p className="ml-1 text-gray-500 text-lg">{firstPost.date}</p>
                </div>
                <h1 className="font-extrabold text-3xl w-3/5">
                  {firstPost.title}
                </h1>
                <p className="text-gray-400 text-2xl">{firstPost.desc}</p>
              </div>
            </div>
          </div>
        </Link>
      }

      {/* Blog post cards */}
      <div className="flex flex-row justify-center my-10">
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-6 w-5/6 mx-12">
          {edges.map(({ node: { id, frontmatter } }) => (
            <Link to={frontmatter.slug} key={id}>
              <div
                className="flex flex-col hover:shadow-2xl
                              p-4 rounded-xl h-full
                              w-3/4 lg:w-full"
              >
                <div className="flex justify-center">
                  <GatsbyImage
                    image={getImage(frontmatter.cover)}
                    alt={frontmatter.coverAlt}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center mx-3 my-2">
                  <div className="flex flex-row">
                    <p className="mr-1 text-primary font-bold text-md xl:text-lg">
                      {frontmatter.category}
                    </p>{' '}
                    •
                    <p className="ml-1 text-gray-500 text-md xl:text-lg">
                      {frontmatter.date}
                    </p>
                  </div>
                  <h1 className="font-extrabold text-2xl my-2">
                    {frontmatter.title.substr(0, 45) + '...'}
                  </h1>
                  <p className="text-gray-400 text-xl">{frontmatter.desc}</p>
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
    localSearchPages {
      index
      store
    }
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
                  width: 350
                  height: 350
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
