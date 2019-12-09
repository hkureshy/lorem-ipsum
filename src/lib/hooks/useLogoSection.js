import { graphql, useStaticQuery } from 'gatsby'

const useLogoSection = () => {
  const data = useStaticQuery(
    graphql`
      query LOGOS_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "index-page" } } }
        ) {
          nodes {
            frontmatter {
              logos {
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                link
              }
            }
          }
        }
      }
    `,
  )
  return data.allMarkdownRemark.nodes[0].frontmatter.logos
}

export default useLogoSection