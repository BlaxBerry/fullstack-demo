import React from "react"
import { Typography } from "antd"
const { Paragraph } = Typography

/* 普通文本省略相关属性
 * https://ant.design/components/typography-cn/#API
 */
interface CustomEllipsis {
  rows: number /* 最多显示的行数 */
  expandable: boolean /* 是否可展开 */
  symbol: React.ReactNode /* 自定义展按钮 */
  suffix?: string /* 自定义省略内容后缀 */
  tooltip?: boolean | React.ReactNode
}

interface CustomTextProps {
  textAlign?: "center" | "left" | "right"
  color?: "secondary" | "danger"
  strong?: boolean
  ellipsis?: false | CustomEllipsis /* 自动溢出省略 */
  copyable?: boolean /* 文本可复制 */
  isText?: boolean /* 普通文本 */
  isCode?: boolean /* 代码包裹的文本 */
  isQuote?: boolean /* 引用注释 */
  isPreBlock?: boolean /* 代码块 */
  children?: React.ReactNode /* 引用注释与代码块内容*/
  className?: string
  style?: React.CSSProperties
}

const Text = (props: CustomTextProps) => {
  const {
    color,
    strong,
    textAlign,
    isText,
    isCode,
    isQuote,
    isPreBlock,
    ellipsis,
  } = props

  return (
    <>
      {/* 普通文本 */}
      {isText && (
        <Paragraph
          type={color}
          strong={strong}
          className={props.className}
          code={isCode}
          style={{ textAlign, ...props.style }}
          ellipsis={ellipsis ? { ...ellipsis } : false}
        >
          {props.children}
        </Paragraph>
      )}

      {/* 引用注释 */}
      {isQuote && (
        <Paragraph>
          <blockquote>{props.children}</blockquote>
        </Paragraph>
      )}

      {/* 代码块 */}
      {/* TODO: copy 按钮位置*/}
      {isPreBlock && (
        <Paragraph>
          <pre>
            <Paragraph copyable>{props.children}</Paragraph>
          </pre>
        </Paragraph>
      )}

      {!props.children && "!!! EMPYTY CONTENT !!!"}
    </>
  )
}

export default Text
