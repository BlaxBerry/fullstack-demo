import * as React from "react"
import { Layout as AntdLayout } from "antd"
const { Content: AntdContent } = AntdLayout
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
    <LeftSider />

    {/* right content */}
    <AntdLayout>
      {/* header */}
      <TopHeader>
        <ContentHeader />
      </TopHeader>
      {/* content */}
      <AntdContent style={{ padding: "24px 10px 0" }}>
        {props.children}
      </AntdContent>
      {/* footer */}
      <div style={{ textAlign: "center" }}>@BlaxBerry</div>
    </AntdLayout>
  </AntdLayout>
)

export default Layout
