import * as React from "react"
import { Layout as AntdLayout } from "antd"
import { PageTitle } from "../Common/Titles"
import RightContent from "./RightContent"
import LeftSider from "./LeftSideBar"

export interface LayoutProps {
  pageTitle: string
  children?: React.ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => (
  <AntdLayout>
    {/* 页面标签相关 */}
    <PageTitle title={props.pageTitle} />

    {/* 布局左侧*/}
    <LeftSider />

    {/* 页面内容*/}
    <RightContent>{props.children}</RightContent>
  </AntdLayout>
)

export default Layout
