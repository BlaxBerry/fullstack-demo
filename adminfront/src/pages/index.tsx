import { graphql, navigate } from "gatsby"
import { useMount } from "ahooks"

const IndexPage = (): JSX.Element => {
  useMount(() => {
    navigate("/home")
  })

  return null
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
