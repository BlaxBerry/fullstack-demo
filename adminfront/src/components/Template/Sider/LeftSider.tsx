import * as React from "react"
import { Layout as AntdLayout, Menu, MenuProps, SiderProps } from "antd"
import { UserOutlined } from "@ant-design/icons"
const { Sider: AntdSider } = AntdLayout
import TopHeader from "../Header"
import { useBoolean } from "ahooks"

interface LeftSiderProps extends SiderProps {
  style?: React.CSSProperties
}

const LeftSider = (props: LeftSiderProps): JSX.Element => {
  const [isCollapsed, { toggle }] = useBoolean(false)

  const items: MenuProps["items"] = [
    {
      label: "菜单项一",
      key: "item-1",
      icon: React.createElement(UserOutlined),
    },
    {
      label: "菜单项二",
      key: "item-2",
      icon: React.createElement(UserOutlined),
    },
    {
      label: "子菜单",
      key: "submenu",
      icon: React.createElement(UserOutlined),
      children: [
        {
          label: "子菜单项一",
          key: "submenu-item-1",
          icon: React.createElement(UserOutlined),
        },
      ],
    },
  ]

  return (
    <AntdSider
      theme="dark"
      collapsible
      collapsed={isCollapsed}
      onCollapse={toggle}
      style={props.style}
    >
      {/* header logo*/}
      <TopHeader>
        <div className="logo" style={{ textAlign: "center", color: "white" }}>
          Logo
        </div>
      </TopHeader>
      {/* menu */}
      <Menu
        theme="dark"
        defaultSelectedKeys={["item-1"]}
        mode="inline"
        items={items}
      />
    </AntdSider>
  )
}

export default LeftSider
