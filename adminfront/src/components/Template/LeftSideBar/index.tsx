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
import useRouteChange from "../../../hooks/useRouteChange"

const { Sider: AntdSider, Header: AntdHeader } = AntdLayout

interface LeftSiderProps extends SiderProps {
  style?: React.CSSProperties
}

const LeftSider = (props: LeftSiderProps): JSX.Element => {
  const { t } = useTranslation()
  const [isCollapsed, { toggle }] = useBoolean(false)

  const { state: routeState } = useLocation()
  const pagename = routeState?.["pagename"]
  const [menuItemDefaultSelectedKey] = useState(pagename || "home")
  const [menuSubmenuDefaultSelectedKey] = useState(
    pagename?.substr(0, pagename.indexOf("/")) || null
  )

  const items: MenuProps["items"] = [
    // home
    {
      label: (
        <Link
          to={useRouteChange("home")}
          state={{
            pagename: "home",
          }}
        >
          {t("pages.home.title")}
        </Link>
      ),
      key: "home",
      icon: React.createElement(HomeOutlined),
    },
    // me
    {
      label: (
        <Link
          to={useRouteChange("me")}
          state={{
            pagename: "me",
          }}
        >
          {t("pages.me.title")}
        </Link>
      ),
      key: "me",
      icon: React.createElement(UserOutlined),
    },
    {
      label: t("pages.medias.title"),
      key: "medias",
      icon: <SmileOutlined />,
      children: [
        // media musics
        {
          label: (
            <Link
              to={useRouteChange("medias/musics")}
              state={{
                pagename: "medias/musics",
              }}
            >
              {t("pages.medias-musics.title")}
            </Link>
          ),
          key: "medias/musics",
          icon: <CustomerServiceOutlined />,
        },
        // media videos
        {
          label: (
            <Link
              to={useRouteChange("medias/videos")}
              state={{
                pagename: "medias/videos",
              }}
            >
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
        // views statistics
        {
          label: (
            <Link
              to={useRouteChange("views/statistics")}
              state={{
                pagename: "views/statistics",
              }}
            >
              {t("pages.views-statistics.title")}
            </Link>
          ),
          key: "views/statistics",
          icon: React.createElement(PieChartOutlined),
        },
        // views create
        {
          label: (
            <Link
              to={useRouteChange("views/create")}
              state={{
                pagename: "views/create",
              }}
            >
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
      style={{
        height: "100vh",
        ...props.style,
      }}
    >
      {/* header logo*/}
      <AntdHeader>
        <div className="logo" style={{ textAlign: "center", color: "white" }}>
          Logo
        </div>
      </AntdHeader>
      {/* menu */}
      <Menu
        theme="dark"
        defaultSelectedKeys={[menuItemDefaultSelectedKey]}
        defaultOpenKeys={[menuSubmenuDefaultSelectedKey]}
        mode="inline"
        items={items}
      />
    </AntdSider>
  )
}

export default LeftSider
