import React from "react"
import { Layout as AntdLayout } from "antd"
import clsx from "clsx"
const { Footer: AntdFooter } = AntdLayout

export interface ContentFooterProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ContentFooter = ({
  children = "@BlaxBerry",
  className,
  style,
}: ContentFooterProps): JSX.Element => {
  return (
    <AntdFooter
      className={clsx(className)}
      style={{ textAlign: "center", ...style }}
    >
      {children || "@BlaxBerry"}
    </AntdFooter>
  )
}

export default ContentFooter
