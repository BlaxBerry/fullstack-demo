import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/Template"
import BackToTop from "../../components/Common/BackToTop"

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t("pages.medias-musics.title")}>
      <BackToTop>{t("pages.medias-musics.title")}</BackToTop>
    </Layout>
  )
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
