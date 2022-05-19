import * as React from "react"
import { useState } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { useBoolean } from "ahooks"
import { Layout as AntdLayout, Menu, MenuProps, SiderProps } from "antd"
import {
  UserOutlined,
  HomeOutlined,
  PlusOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  SmileOutlined,
  CustomerServiceOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import TopHeader from "../Header"

const { Sider: AntdSider } = AntdLayout

interface LeftSiderProps extends SiderProps {
  style?: React.CSSProperties
}

const LeftSider = (props: LeftSiderProps): JSX.Element => {
  const [isCollapsed, { toggle }] = useBoolean(false)

  const { state: routeState } = useLocation()
  const pagename = routeState["pagename"]
  const [menuItemDefaultSelectedKey] = useState(pagename || "home")
  const [menuSubmenuDefaultSelectedKey] = useState(
    pagename?.substr(0, pagename.indexOf("/")) || null
  )

  const items: MenuProps["items"] = [
    {
      label: "首页",
      key: "home",
      icon: React.createElement(HomeOutlined),
    },
    {
      label: "个人信息",
      key: "me",
      icon: React.createElement(UserOutlined),
    },
    {
      label: "媒体",
      key: "medias",
      icon: <SmileOutlined />,
      children: [
        {
          label: "音乐",
          key: "medias/musics",
          icon: <CustomerServiceOutlined />,
        },
        {
          label: "视频",
          key: "medias/videos",
          icon: <VideoCameraOutlined />,
        },
      ],
    },
    {
      label: "页面统计",
      key: "views",
      icon: React.createElement(AppstoreOutlined),
      children: [
        {
          label: "数据详情",
          key: "views/statistics",
          icon: React.createElement(PieChartOutlined),
        },
        {
          label: "新增页面",
          key: "views/create",
          icon: React.createElement(PlusOutlined),
        },
      ],
    },
  ]

  // route change
  const onMenuSelect = ({ key }) => {
    // [key] equal route url path
    navigate(`/${key}`, {
      state: {
        // TODO: 若如需要视情况传递参数
        pagename: key,
      },
    })
  }

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
        defaultSelectedKeys={[menuItemDefaultSelectedKey]}
        defaultOpenKeys={[menuSubmenuDefaultSelectedKey]}
        mode="inline"
        items={items}
        onSelect={onMenuSelect}
      />
    </AntdSider>
  )
}

export default LeftSider
