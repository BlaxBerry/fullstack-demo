import { graphql, navigate } from "gatsby"
import { useMount } from "ahooks"
import { defaultLanguage } from "../configs/defaultValues"

const IndexPage = (): JSX.Element => {
  const languageActive =
    localStorage.getItem("fullstack-demo-language") || defaultLanguage

  useMount(() => {
    navigate(`${languageActive}/home`)
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
