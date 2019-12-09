import { graphql, useStaticQuery } from 'gatsby'

const useHeaderSection = () => {
  const data = useStaticQuery(
    graphql`
      query HEADER_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "header-area" } } }
        ) {
          edges {
            node {
              frontmatter {
                logo {
                  header_logo {
                    publicURL
                  }
                  alt
                }
              }
            }
          }
        }
      }
    `,
  )
  return data.allMarkdownRemark.edges[0].node.frontmatter.logo
}

export default useHeaderSection