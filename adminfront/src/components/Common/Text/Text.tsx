import React from "react"
import clsx from "clsx"
import { Typography } from "antd"
import { TextProps } from "antd/lib/typography/Text"
const { Paragraph } = Typography

// TODO: 共通化
/** 普通文本省略相关属性
 * https://ant.design/components/typography-cn/#API
 */
interface CustomEllipsis {
  rows: number /* 最多显示的行数 */
  expandable: boolean /* 是否可展开 */
  symbol: React.ReactNode /* 自定义展按钮 */
  suffix?: string /* 自定义省略内容后缀 */
  tooltip?: boolean | React.ReactNode
}

/**
 * 继承 AntDesign <Text/> 的 props
 * @type text 普通文本
 * @type quote 引用注释
 */
export interface CustomTextProps extends TextProps {
  quote?: boolean
  children: string | React.ReactNode
  align?: "center" | "left" | "right"
  color?: string
  strong?: boolean
  ellipsis?: false | CustomEllipsis /* 自动溢出省略 */
  copyable?: boolean /* 文本可复制 */
  className?: string
  style?: React.CSSProperties
}

const Text = ({
  quote = false,
  children,
  align = "left",
  strong = false,
  color,
  ellipsis = false,
  copyable = false,
  ...props
}: CustomTextProps) => {
  return (
    <>
      {/* 返回普通文本 */}
      {!quote && (
        <Paragraph
          {...props}
          strong={strong}
          ellipsis={ellipsis ? { ...ellipsis } : false}
          copyable={copyable && { tooltips: false }}
          className={clsx(props.className)}
          style={{
            textAlign: align,
            color: color,
            ...props.style,
          }}
        >
          {children}
        </Paragraph>
      )}

      {/* 返回引用注释 */}
      {quote && (
        <Paragraph>
          <blockquote>{children}</blockquote>
        </Paragraph>
      )}

      {/* 错误：empty 空内容 */}
      {!children && "!!! 无内容 !!!"}
    </>
  )
}

export default Text
