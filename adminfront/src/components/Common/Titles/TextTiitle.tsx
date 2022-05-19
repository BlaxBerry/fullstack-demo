import React from "react"
import { Typography, Divider } from "antd"
const { Title: AntdTitle } = Typography

interface TextTitleProps {
  title?: string
  subTitle?: string
  size: 5 | 1 | 2 | 3 | 4
  color?: "secondary" | "danger" /* 颜色 */
  ellipsis?: boolean /* 自动溢出省略 */
  textAlign?: "center" | "left" | "right"
  isCode?: boolean /* 代码形式 */
  copyable?: boolean /* 文本可复制 */
  withDivide?: boolean /* 分割线 */
  dividerPosition?: "left" | "right" | "center"
  className?: string
  style?: React.CSSProperties
}

const Title = (props: TextTitleProps) => {
  const {
    title,
    subTitle,
    size,
    color,
    ellipsis,
    textAlign,
    isCode,
    copyable,
    withDivide,
    dividerPosition,
  } = props

  const CommonTitle = (props: TextTitleProps) => (
    <AntdTitle
      level={size}
      type={color}
      ellipsis={ellipsis}
      code={isCode}
      copyable={copyable}
      className={props.className}
      style={{ textAlign, ...props.style }}
    >
      {/* title or subtitle */}
      {subTitle || title || "!!! EMPYTY CONTENT !!!"}
    </AntdTitle>
  )

  return (
    <>
      {/* without Divider */}
      {!withDivide && <CommonTitle {...props} />}

      {/* if with Divider */}
      {withDivide && (
        <Divider orientation={dividerPosition}>
          <CommonTitle {...props} />
        </Divider>
      )}
    </>
  )
}

export default Title
