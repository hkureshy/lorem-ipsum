import { graphql, useStaticQuery } from 'gatsby'

const useHeroSection = () => {
  const data = useStaticQuery(
    graphql`
      query HERO_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "index-page" } } }
        ) {
          nodes {
            frontmatter {
              hero {
                heading
                subheading
                image {
                  publicURL
                }
              }
            }
          }
        }
      }
    `,
  )
  return data.allMarkdownRemark.nodes[0].frontmatter.hero
}

export default useHeroSection