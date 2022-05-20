import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/Template"
import BackToTop from "../components/Common/BackToTop"
import { Title } from "../components/Common/Titles"
import Text from "../components/Common/Text/Text"
import Code from "../components/Common/Text/Code"

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t("pages.about.title")}>
      <BackToTop>
        <Title title={t("pages.about.title")} size={1} textAlign="center" />
        <Title subTitle={"更新于 2022.05"} size={5} textAlign="center" />

        <Text contentType="text">xxxx</Text>
        <Code block copyable>
          {`
              name = '沃尼玛'\n
              age = 28\n\n\n
              def func():\n
                  print('hello')\n\n
              func()
          `}
        </Code>
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
