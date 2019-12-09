import { graphql, useStaticQuery } from 'gatsby'

const useFooterSection = () => {
  const data = useStaticQuery(
    graphql`
      query FOOTER_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "footer-area" } } }
        ) {
          edges {
            node {
              frontmatter {
                logo {
                  footer_logo {
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

export default useFooterSection