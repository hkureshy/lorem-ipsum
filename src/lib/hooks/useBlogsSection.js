import { graphql, useStaticQuery } from 'gatsby'

const useBlogsSection = () => {
  const data = useStaticQuery(
    graphql`
      query BLOGS_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                featuredimage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                date
                excerpt
              }
            }
          }
        }
      }
    `,
  )
  return data.allMarkdownRemark.edges
}

export default useBlogsSection