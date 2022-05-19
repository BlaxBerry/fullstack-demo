import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/Template"

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()
  return <Layout pageTitle={t("pages.me.title")}>{t("pages.me.title")}</Layout>
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
