import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/Template"
// import BackToTop from "../components/Common/BackToTop"
import { Title } from "../components/Common/Titles"
import Text from "../components/Common/Text/Text"

interface ListContentItem {
  belongTo: string
  title?: string
  list: Array<string>
}

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation()

  /* 开始语 */
  const startWords: ListContentItem = {
    belongTo: "pages.about.start-words",
    list: ["a", "b"],
  }
  /*　项目描述 */
  const description: ListContentItem = {
    belongTo: "pages.about.description",
    title: t("pages.about.description.title"),
    list: ["a", "b", "c"],
  }
  /*　版权说明 */
  const license: ListContentItem = {
    belongTo: "pages.about.license",
    title: t("pages.about.license.title"),
    list: ["a", "b", "c"],
  }

  const ListContentLayout = ({ content }: { content: ListContentItem }) => {
    const { belongTo, title, list } = content
    return (
      <>
        {/* title */}
        {title && <Title title={title} size={3} />}
        {list.map((e: string, i: number) => (
          <Text key={i} color={title && "grey"}>
            {/* index */}
            {title && <strong>{i + 1}.&nbsp;</strong>}
            {/* text content */}
            {t(`${belongTo}.${e}`)}
          </Text>
        ))}
        <br />
      </>
    )
  }

  return (
    <Layout pageTitle={t("pages.about.title")}>
      {/* <BackToTop> */}
      <Title
        title={t("pages.about.title")}
        size={1}
        align="center"
        withDivide
      />
      {/* 更新日期 */}
      <Text color="grey" align="center">
        {t("pages.about.update")} 2022-05
      </Text>
      <br />
      {/* 开始语 */}
      <ListContentLayout content={startWords} />
      {/* 项目描述 */}
      <ListContentLayout content={description} />
      {/* 版权说明 */}
      <ListContentLayout content={license} />
      {/* </BackToTop> */}
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
