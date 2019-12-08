import { graphql, useStaticQuery } from 'gatsby'

const useIntroSection = () => {
  const data = useStaticQuery(
    graphql`
      query INTRO_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "index-page" } } }
        ) {
          nodes {
            frontmatter {
              intro {
                description
                heading
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  return data.allMarkdownRemark.nodes[0].frontmatter.intro
}

export default useIntroSection