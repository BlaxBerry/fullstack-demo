import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { useTranslation } from "gatsby-plugin-react-i18next"
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
import useRouteChange from "../../../hooks/useRouteChange"

const { Sider: AntdSider } = AntdLayout

interface LeftSiderProps extends SiderProps {
  style?: React.CSSProperties
}

const LeftSider = (props: LeftSiderProps): JSX.Element => {
  const { t } = useTranslation()
  const [isCollapsed, { toggle }] = useBoolean(false)

  const { state: routeState } = useLocation()
  // const pagename = routeState["pagename"]
  console.log(routeState)

  console.log(useRouteChange("home"))

  const [menuItemDefaultSelectedKey] = useState(/*pagename ||*/ "home")
  const [menuSubmenuDefaultSelectedKey] = useState(
    /*pagename?.substr(0, pagename.indexOf("/")) ||*/ null
  )

  const items: MenuProps["items"] = [
    {
      label: <Link to={useRouteChange("home")}>{t("pages.home.title")}</Link>,
      key: "home",
      icon: React.createElement(HomeOutlined),
    },
    {
      label: <Link to={useRouteChange("me")}>{t("pages.me.title")}</Link>,
      key: "me",
      icon: React.createElement(UserOutlined),
    },
    {
      label: t("pages.medias.title"),
      key: "medias",
      icon: <SmileOutlined />,
      children: [
        {
          label: (
            <Link to={useRouteChange("medias/musics")}>
              {t("pages.medias-musics.title")}
            </Link>
          ),
          key: "medias/musics",
          icon: <CustomerServiceOutlined />,
        },
        {
          label: (
            <Link to={useRouteChange("medias/videos")}>
              {t("pages.medias-videos.title")}
            </Link>
          ),
          key: "medias/videos",
          icon: <VideoCameraOutlined />,
        },
      ],
    },
    {
      label: t("pages.views.title"),
      key: "views",
      icon: React.createElement(AppstoreOutlined),
      children: [
        {
          label: (
            <Link to={useRouteChange("views/statistics")}>
              {t("pages.views-statistics.title")}
            </Link>
          ),
          key: "views/statistics",
          icon: React.createElement(PieChartOutlined),
        },
        {
          label: (
            <Link to={useRouteChange("views/create")}>
              {t("pages.views-create.title")}
            </Link>
          ),
          key: "views/create",
          icon: React.createElement(PlusOutlined),
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
        defaultSelectedKeys={[menuItemDefaultSelectedKey]}
        defaultOpenKeys={[menuSubmenuDefaultSelectedKey]}
        mode="inline"
        items={items}
        // onSelect={onMenuSelect}
      />
    </AntdSider>
  )
}

export default LeftSider
