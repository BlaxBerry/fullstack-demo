import * as React from "react"
import { Layout as AntdLayout, LayoutProps } from "antd"
const { Header: AntdHeader } = AntdLayout

interface TopHeaderProps extends LayoutProps {
  style?: React.CSSProperties
}

const TopHeader = (props: TopHeaderProps): JSX.Element => (
  <AntdHeader {...props} style={{ padding: 0, ...props.style }}>
    {props.children}
  </AntdHeader>
)

export default TopHeader
