import React, { useState } from 'react'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import CloseSVG from '../../assets/icons/x.svg'
import isBrowser from '../../utils/constants'
import SearchBar from '../../shared-components/Search'
import SEO from '../../shared-components/SEO'

const PageHeader = ({ data, searchQuery, setSearchQuery, setFilterQuery }) => {
  const categories = [
    'React',
    'Mdx',
    'Development',
    'Event',
    'Job and Career',
    'Mobile',
    'Productivity',
    'Website',
  ]

  function addFilterSearch(event, item) {
    event.target.classList.toggle('bg-gray-200')
    event.target.classList.toggle('outline-none')

    if (
      event.target.classList.contains('bg-gray-200') &&
      event.target.classList.contains('outline-none')
    ) {
      setFilterQuery(item)
    } else {
      setFilterQuery('')
    }
  }

  return (
    <div className="flex flex-col m-12 lg:mx-20 text-center">
      <div className="flex flex-col items-center">
        <h1 className="flex justify-center font-serif font-extrabold tracking-wide my-4 text-4xl lg:text-5xl lg:w-2/5">
          Studio Karsa Blog
        </h1>
        <p className="hidden md:flex justify-center font-sans font-medium my-4 text-2xl lg:w-5/6">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy
        </p>
      </div>
      <div className="flex flex-col items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex flex-row justify-center items-center w-full text-lg lg:text-xl">
          <div className="flex justify-start mx-2 md:hidden">Recently</div>
          <div className="overflow-x-scroll md:overflow-hidden">
            <div className="flex flex-row md:grid md:grid-cols-4 gap-3 p-4">
              {data.map(({ node: { id, frontmatter } }) => (
                <div className="relative flex items-center justify-center" key={id}>
                  <div
                    className="text-gray-400 border-2 rounded-full md:py-1 px-4 whitespace-nowrap cursor-pointer w-full"
                    onClick={e => addFilterSearch(e, frontmatter.category)}
                  >
                    {frontmatter.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SuggestedPost = ({ post }) => (
  <div className="grid grid-cols-1 col-span-3 my-6">
    <Link to={post.frontmatter.slug} key={post.id}>
      <div className="flex flex-row justify-center">
        <div className="flex lg:flex-row flex-col shadow-2xl p-4 rounded-xl w-full">
          <div className="flex-1 grid place-items-center overflow-hidden">
            <GatsbyImage
              image={getImage(post.frontmatter.cover)}
              alt={post.frontmatter.coverAlt}
              className="w-full h-96 rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col my-2 px-6">
            <div className="flex items-center space-x-1 text-md xl:text-lg">
              <span className="capitalize text-primary font-bold">
                {post.frontmatter.category}
              </span>
              <span>•</span>
              <span className="text-gray-500">{post.frontmatter.date}</span>
            </div>
            <div className="text-3xl overflow-hidden overflow-ellipsis line-clamp-3 py-1">
              <h2 className="font-extrabold">{post.frontmatter.title}</h2>
            </div>
            <p className="text-gray-400 text-xl">{post.frontmatter.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

const Post = ({ id, slug, cover, coverAlt, category, date, title, desc }) => (
  <Link to={slug} key={id} className="mx-2">
    <div className="flex flex-row justify-center h-full">
      <div className="flex flex-col hover:shadow-2xl rounded-xl my-10 p-4">
        <div className="grid place-items-center overflow-hidden">
          <GatsbyImage
            image={getImage(cover)}
            alt={coverAlt}
            className="w-full h-80 rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center mx-3 my-2 pb-3">
          <div className="flex items-center space-x-1">
            <p className="capitalize text-primary font-bold text-md xl:text-lg">
              {category}
            </p>
            <span>•</span>
            <p className="text-gray-500 text-md xl:text-lg">{date}</p>
          </div>
          <div className="text-xl 2xl:text-2xl overflow-hidden overflow-ellipsis line-clamp-2 pt-2">
            <h2 className="font-extrabold">{title}</h2>
          </div>
          <div className="text-xl overflow-hidden overflow-ellipsis line-clamp-2 pt-2">
            <p className="text-gray-400 text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

const ListsPost = ({ posts, isSearched }) => {
  if (!isSearched) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 col-span-3">
        {posts.map(({ node: { id, frontmatter } }) => (
          <Post
            key={id}
            id={id}
            slug={frontmatter.slug}
            cover={frontmatter.cover}
            coverAlt={frontmatter.coverAlt}
            category={frontmatter.category}
            date={frontmatter.date}
            title={frontmatter.title}
            desc={frontmatter.desc}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 col-span-3">
        {posts.map((result, index) => (
          <Post
            key={index}
            id={index}
            slug={result.slug}
            cover={result.cover}
            coverAlt={result.coverAlt}
            category={result.category}
            date={result.date}
            title={result.title}
            desc={result.desc}
          />
        ))}
      </div>
    )
  }
}

const Page = () => {
  let { search } = ''
  if (isBrowser) search = window.location.search

  const {
    file,
    allMdx: { edges },
    localSearchPages: { index, store },
  } = useStaticQuery(query)
  const seoImage = getImage(file)
  const seoImageSRC = getSrc(file)

  const queries = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(queries || '')
  const [filterQuery, setFilterQuery] = useState(queries || '')

  const queryType = searchQuery || filterQuery
  const refrences = typeof searchQuery === null ? 'category' : 'title'
  const results = useFlexSearch(queryType, index, store, refrences)

  const suggestedPost = edges[0].node
  const postsContents = results.length < 1 ? edges : results
  const isSearched = results.length < 1 ? false : true

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

      <PageHeader
        data={edges}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setFilterQuery={setFilterQuery}
      />

      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:w-5/6">
          {results.length < 1 && <SuggestedPost post={suggestedPost} />}
          <ListsPost posts={postsContents} isSearched={isSearched} />
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
                  layout: CONSTRAINED
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
