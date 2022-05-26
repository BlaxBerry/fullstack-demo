import * as React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Button } from "antd"
import Layout from "../components/Template"
import Result from "../components/Common/Results/PageResult"
import Text from "../components/Common/Text/Text"
import useRouteChange from "../hooks/useRouteChange"

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  const messages = [
    t("pages.500.message-1"),
    t("pages.500.message-2") + "https://github.com/BlaxBerry",
  ]

  return (
    <Layout pageTitle={t("pages.500.title")}>
      <Result
        status="500"
        title={t("pages.500.title")}
        subTitle={t("pages.500.subTitle")}
      >
        <div>
          {messages.map((str, index) => (
            <Text key={index} align="center" color="grey">
              {str}
            </Text>
          ))}
        </div>
        <Link to={useRouteChange("home")} replace={true}>
          <Button type="primary">{t("pages.404.backHome")}</Button>
        </Link>
      </Result>
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
