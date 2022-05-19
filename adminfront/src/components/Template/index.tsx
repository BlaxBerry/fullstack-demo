import * as React from "react"
import { Layout as AntdLayout } from "antd"
import LeftSider from "./Sider/LeftSider"
import TopHeader from "./Header"
import ContentHeader from "./Header/ContentHeader"
import { PageTitle } from "../Common/Titles"

const { Content: AntdContent, Footer: AntdFooter } = AntdLayout

interface LayoutProps {
  pageTitle: string
  children?: React.ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => (
  <AntdLayout>
    <PageTitle title={props.pageTitle} />
    {/* left sider */}
    <LeftSider style={{ height: "100vh" }} />

    {/* right content */}
    <AntdLayout>
      {/* header */}
      <TopHeader>
        <ContentHeader />
      </TopHeader>
      {/* content */}
      <AntdContent className="theme-light">
        {/* true content */}
        <div className="true-content">{props.children}</div>
        {/* footer */}
        <AntdFooter style={{ textAlign: "center" }}>@BlaxBerry</AntdFooter>
      </AntdContent>
    </AntdLayout>
  </AntdLayout>
)

export default Layout
