import * as React from "react"
import { Dropdown } from "antd"
import { SettingOutlined } from "@ant-design/icons/lib/icons"
import { HeaderSetting } from "../../Setting"

const ContentHeader = (): JSX.Element => {
  return (
    <div style={{ textAlign: "right", color: "white", padding: "0 20px" }}>
      <Dropdown overlay={<HeaderSetting />} placement="bottomRight">
        <SettingOutlined />
      </Dropdown>
    </div>
  )
}

export default ContentHeader
