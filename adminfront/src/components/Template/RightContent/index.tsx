import * as React from "react"
import { Layout as AntdLayout } from "antd"
import Header from "./Header"
import Footer from "./Footer"

const { Content: AntdContent } = AntdLayout

const antd_layout_header_height = "64px"
const antd_layout_footer_height = "48px"

const RightContent = (props): JSX.Element => (
  <AntdLayout>
    {/* header */}
    <Header />

    {/* content */}
    <AntdContent className="theme-light">
      {/* true content */}
      <div
        style={{
          minHeight: `calc(100vh - ${antd_layout_header_height} - ${antd_layout_footer_height})`,
          padding: "20px 20px 0",
        }}
      >
        {props.children}
      </div>

      {/* footer */}
      <Footer />
    </AntdContent>
  </AntdLayout>
)

export default RightContent
