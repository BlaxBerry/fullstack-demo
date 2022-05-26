import * as React from "react"
import { Dropdown } from "antd"
import { Layout as AntdLayout } from "antd"
import { SettingOutlined as AntdIconSetting } from "@ant-design/icons/lib/icons"
import { HeaderSetting } from "../../Common/Setting"
const { Header: AntdHeader } = AntdLayout

const ContentHeader = (): JSX.Element => {
  return (
    <AntdHeader
      style={{ textAlign: "right", color: "white", padding: "0 20px" }}
    >
      {/* <div style={{ textAlign: "right", color: "white", padding: "0 20px" }}> */}

      {/* setting 设置下拉菜单 */}
      <Dropdown overlay={<HeaderSetting />} placement="bottomRight">
        <AntdIconSetting />
      </Dropdown>

      {/* TDOD: 按需添加 */}

      {/* </div> */}
    </AntdHeader>
  )
}

export default ContentHeader
