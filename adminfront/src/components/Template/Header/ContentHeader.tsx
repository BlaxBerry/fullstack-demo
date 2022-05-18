import * as React from "react"
import { Button, Dropdown, Menu, MenuProps } from "antd"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons/lib/icons"

const items: MenuProps["items"] = [
  {
    label: "设置项一",
    key: "item-1",
    icon: <MailOutlined />,
  },
  {
    label: "设置项二",
    key: "item-2",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    type: "group",
    label: "设置项三",
    children: [
      {
        label: "Option 1",
        key: "item-3:1",
      },
      {
        label: "Option 2",
        key: "item-3:2",
      },
    ],
  },
  {
    label: "设置项四",
    key: "item-4",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "子选项一",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "子选项二",
        children: [
          {
            label: "Option 1",
            key: "setting:3",
          },
          {
            label: "Option 1",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        链接 Link
      </a>
    ),
    key: "alipay",
  },
]

const ContentHeader = (): JSX.Element => {
  return (
    <div style={{ textAlign: "right", color: "white", padding: "0 20px" }}>
      <Dropdown overlay={<Menu items={items} />} placement="bottomRight" arrow>
        <SettingOutlined />
      </Dropdown>
    </div>
  )
}

export default ContentHeader
