import * as React from "react"
import { Layout as AntdLayout } from "antd"
const { Content: AntdContent, Footer: AntdFooter } = AntdLayout
import LeftSider from "./Sider/LeftSider"
import TopHeader from "./Header"
import ContentHeader from "./Header/ContentHeader"

interface LayoutProps {
  pageTitle: string
  children?: React.ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => (
  <AntdLayout>
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
        <div style={{ padding: "20px 20px 0" }}>{props.children}</div>
        {/* footer */}
        <AntdFooter style={{ textAlign: "center" }}>@BlaxBerry</AntdFooter>
      </AntdContent>
    </AntdLayout>
  </AntdLayout>
)

export default Layout
