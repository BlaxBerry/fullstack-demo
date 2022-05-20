import React from "react"
import { Typography } from "antd"
import { TextProps } from "antd/lib/typography/Text"
const { Paragraph, Text } = Typography

/**
 * 继承 AntDesign <Text/> 的 props
 */
export interface CodeProps extends TextProps {
  children: string | React.ReactNode
  block?: boolean /* 代码块 */
  strong?: boolean
  copyable?: boolean /* 文本可复制 */
}

const Code = ({
  strong = false,
  children,
  block = false,
  copyable = false,
  ...props
}: CodeProps) => {
  return (
    <>
      {/* 返回代码文本 */}
      {!block && (
        <Text
          {...props}
          strong={strong}
          copyable={copyable && { tooltips: false }}
        >
          {children}
        </Text>
      )}

      {/* 返回代码块 */}
      {/* TODO: copy 按钮位置*/}
      {block && (
        <Paragraph className="code-block-wrap">
          <pre>
            <Paragraph copyable={copyable && { tooltips: false }}>
              {children}
            </Paragraph>
          </pre>
        </Paragraph>
      )}
    </>
  )
}

export default Code
