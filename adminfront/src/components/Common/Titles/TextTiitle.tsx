import React from "react"
import { Typography, Divider } from "antd"
import { TitleProps } from "antd/lib/typography/Title"
const { Title: AntdTitle } = Typography

/**
 *  继承 AntDesign <Title/> 的 props
 * @title 主标题
 * @subtitle 副标题
 * @withDivide 是否带有分割线
 */
export interface TextTitleProps extends TitleProps {
  title: string /* 主标题 */
  subTitle?: string /* 副标题 */
  size: 1 | 2 | 3 | 4 | 5 /* h1~h5 标签 */
  color?: string
  align?: "center" | "left" | "right"
  subColor?: string
  subSize?: 1 | 2 | 3 | 4 | 5
  withDivide?: boolean /* 分割线 */
  dividerPosition?: "left" | "right" | "center" /* 分割线位置 */
  className?: string
  style?: React.CSSProperties
}

const Title = (props: TextTitleProps) => {
  const {
    title,
    subTitle,
    size = 3,
    color,
    align = "left",
    subSize = 5,
    subColor = color,
    withDivide = false,
    dividerPosition = "center",
  } = props

  const titleLayout = (props: TextTitleProps) => (
    <>
      {/* 返回主标题 */}
      <AntdTitle
        level={size}
        className={props.className}
        style={{
          color: color,
          marginBottom: subTitle ? 0 : "auto",
          textAlign: align,
          ...props.style,
        }}
      >
        {title ? title : "!!! EMPYTY CONTENT !!!"}
      </AntdTitle>
      {/* 返回副标题 */}
      {subTitle && (
        <AntdTitle
          level={subSize}
          style={{ color: subColor, marginTop: 0, textAlign: align }}
        >
          {subTitle}
        </AntdTitle>
      )}
    </>
  )

  return (
    <>
      {/* 返回无分割线的标题 */}
      {!withDivide && titleLayout(props)}

      {/* 返回搭配分割线的标题 */}
      {withDivide && (
        <Divider orientation={dividerPosition}>{titleLayout(props)}</Divider>
      )}
    </>
  )
}

export default Title
