import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/Template"
import BackToTop from "../components/Common/BackToTop"
import { Title } from "../components/Common/Titles"
import Text from "../components/Common/Text/Text"

import { Typography } from "antd"
const { Paragraph } = Typography

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t("pages.about.title")}>
      <BackToTop>
        <Title title={t("pages.about.title")} size={1} textAlign="center" />
        <Title subTitle={"更新于 2022.05"} size={5} textAlign="center" />

        <Text />
        <Text isText />
        <Text isCode />
        <Text isQuote />
        <Text isPreBlock />

        <Text isPreBlock>ssss</Text>
      </BackToTop>
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
