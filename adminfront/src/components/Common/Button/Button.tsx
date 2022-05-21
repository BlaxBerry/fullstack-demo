import React, { useState, useEffect, CSSProperties } from "react"
import clsx from "clsx"
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd"
import { ButtonShape as AntdButtonShape, ButtonType } from "antd/lib/button"
import { LoadingOutlined } from "@ant-design/icons"
import { SizeType } from "antd/lib/config-provider/SizeContext"

/**
 * 继承 Antd <Button/> props
 * https://ant.design/components/button-cn/#components-button-demo-basic
 */
export interface ButtonProps extends AntdButtonProps {
  children: string | React.ReactNode
  block?: boolean /* 类型：充满父标签的块级按钮 */
  text?: boolean /* 类型：文本按钮 */
  dashed?: boolean /* 类型：虚线边框 */
  fab?: boolean /* 形状：圆形*/
  capsule?: boolean /* 形状：胶囊形 */
  large?: boolean /* 尺寸：大 */
  small?: boolean /* 尺寸：小 */
  disabled?: boolean /* 不可选 */
  loading?: boolean /* 加载中 */
  className?: string
  style?: CSSProperties
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    block = false,
    text = false,
    dashed = false,
    fab = false,
    capsule = false,
    large = false,
    small = false,
    disabled = false,
    loading = false,
  } = props

  /* 按钮类型：默认、虚线按钮(dashed) */
  const [type, setType] = useState<ButtonType>("primary")
  /* 按钮形状：方块形(默认)、圆形(fab)、胶囊型(capsule) */
  const [shape, setShape] = useState<AntdButtonShape>(null)
  /* 按钮大小：默认尺寸、大尺寸、小尺寸 */
  const [size, setSize] = useState<SizeType>(null)

  /* 初始化属性值 */
  useEffect(() => {
    /* 设置类型 */
    if (text) setType("text")
    if (dashed) setType("dashed")
    /* 设置形状*/
    if (fab) setShape("circle")
    if (capsule) setShape("round")
    if (fab && capsule) setShape("circle") // 防止按钮形状重复, fab > capsule
    /* 设置尺寸 */
    if (large) setSize("large")
    if (small) setSize("small")
  }, [])

  /* TODO：使用不规范时的提示信息
  const [errorMessages, setErrorMessages] = useState<Array<string>>([])
  useEffect(() => {
    // 不建议将单纯文本内容写入 fab 类型按钮
    if (fab && typeof children === "string") {
      setErrorMessages([
        ...errorMessages,
        "!!! DONOT RECOMMENDED USEING fab FOR TEXT CONTENT !!!",
      ])
    }
    // 不建议同时传入 fab 与 block
    if (fab && block) {
      setErrorMessages([
        ...errorMessages,
        "!!! DONOT RECOMMENDED USEING TOGETHER: fab & block !!!",
      ])
    }
    // 不建议同时传入 large 与 small
    if (large && small) {
      setErrorMessages([
        ...errorMessages,
        "!!! DONOT RECOMMENDED USEING TOGETHER: large & small !!!",
      ])
    }
  }, [fab, block])
  */

  // TODO: 自定义样式覆盖 Antd Button 默认样式
  return (
    <>
      <AntdButton
        type={type}
        block={block}
        shape={shape}
        size={size}
        disabled={disabled}
        className={clsx("my-button", props.className)}
        style={{ ...props.style }}
      >
        {/* loading status icon */}
        {loading && (
          <div className="my-button-loading-icon">
            <LoadingOutlined />
          </div>
        )}

        {/* 按钮内容 */}
        <div
          className="my-button-content"
          style={{
            visibility: loading ? "hidden" : "visible",
          }}
        >
          {children}
        </div>
      </AntdButton>

      {/*  TODO：错误：使用不规范时的提示信息 */}
      {/* {errorMessages} */}
    </>
  )
}

export default Button
