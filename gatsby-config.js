module.exports = {
  siteMetadata: {
    title: `Studio Karsa`,
    description: `We make websites, UI/UX designs and mobile friendly apps. We are a remote digital agency based in Jakarta, Indonesia.`,
    author: `@studiokarsa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-remark-highlight-code`,
      options: {
        terminal: 'carbon',
        theme: 'blackboard',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          `gatsby-remark-highlight-code`,
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/modules/blog/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/modules/layout/BaseLayout.jsx`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: "soundex",
          tokenize: "full",
          async: false,
        },
        query: `
        {
          allMdx {
            nodes {
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
        `,
        index: ['title', 'slug', 'category'],
        store: ['id', 'slug', 'category', 'title', 'desc', 'category', 'date', 'coverAlt', 'cover'],

        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: node.frontmatter.slug,
            category: node.frontmatter.category,
            title: node.frontmatter.title,
            desc: node.frontmatter.desc,
            category: node.frontmatter.category,
            date: node.frontmatter.date,
            coverAlt: node.frontmatter.coverAlt,
            cover: node.frontmatter.cover,
          })),
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
