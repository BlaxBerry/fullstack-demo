import * as React from "react"
import { Link } from "gatsby"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { Menu, MenuProps } from "antd"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  GlobalOutlined,
} from "@ant-design/icons/lib/icons"
import ReactCountryFlag from "react-country-flag"
import useRouteChange from "../../../hooks/useRouteChange"

const HeaderSetting = (): JSX.Element => {
  const { t } = useTranslation()
  const { changeLanguage, language } = useI18next()

  const langs = [
    {
      label: (
        <>
          <ReactCountryFlag countryCode="CN" /> {t("languages.zh")}
        </>
      ),
      key: "zh",
      icon: null,
    },
    {
      label: (
        <>
          <ReactCountryFlag countryCode="US" /> {t("languages.en")}
        </>
      ),
      key: "en",
      icon: null,
    },
    {
      label: (
        <>
          <ReactCountryFlag countryCode="JP" /> {t("languages.ja")}
        </>
      ),
      key: "ja",
      icon: null,
    },
  ]

  const items: MenuProps["items"] = [
    {
      label: t("components.setting.languages"),
      key: "set-language",
      icon: <GlobalOutlined />,
      children: langs.map(item => ({
        label: item.label,
        key: item.key,
        icon: item.icon,
      })),
    },
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
        <Link
          to={useRouteChange("about")}
          state={{ pagename: "about" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("components.setting.about")}
        </Link>
      ),
      key: "about",
    },
    {
      label: (
        <a
          href="https://github.com/BlaxBerry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      ),
      key: "github",
    },
  ]

  const onSelected = ({ key }) => {
    // console.log(key)

    /** 切换语言
     * 语言选项的 menuItem key 即 lang 代码
     */
    switch (key) {
      case "zh":
      case "en":
      case "ja":
        changeLanguage(key)
        localStorage.setItem("fullstack-demo-language", key)
    }
  }

  return (
    <Menu
      theme="dark"
      items={items}
      onClick={onSelected}
      defaultSelectedKeys={[language]}
    />
  )
}

export default HeaderSetting
