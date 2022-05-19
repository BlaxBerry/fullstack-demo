# Text 文本

用于展示指定的文本内容、代码、引用等

展示内容作为 `<Text/>` 的 `children` 传入

:::caution
可能会修改
:::

## 属性

`<Tsxt/>` 的 `props` 类型如下：

其中的 **`ellipsis`** [详见下文](#省略)

```jsx
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
```

<br/>

## 使用

### 普通文本

```jsx
<Text isText>hello world</Text>
```

hello world

---

### 代码文本

```jsx
<Text isCode>const name = 'Andy'</Text>
```

`const name = 'Andy'`

---

### 代码块

:::caution
可能会修改
:::

```jsx
<Text isPreBlock>` name = 'Andy' age = 28 def say(): print('hello') `</Text>
```

<pre>
    name = 'Andy'<br/>
    age = 28<br/><br/><br/>

    def say():<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;print('hello')
</pre>

---

### 引用

```jsx
<Text isText>注释：这是个注释</Text>
```

> 注释：这是个注释

---

### 省略

:::caution
可能会修改
:::

```jsx
<Text text="xxxxxxx" ellipsis={false}/>

<Text
    ellipsis={{
        rows: 3,
        symbol: '展示更多',
        expandable: true,
    }}
>
xxxxxxxxxxxxxxxxxxxxxxxxxx
</Text>
```

:::tip TODO：`ellipsis` 类型如下：

```jsx
interface CustomTextProps {
  ...
  ellipsis?: false | CustomEllipsis /* 自动溢出省略 */
  ...
}

interface CustomEllipsis {
  rows: number /* 最多显示的行数 */
  expandable: boolean /* 是否可展开 */
  symbol: React.ReactNode /* 自定义展按钮 */
  suffix?: string /* 自定义省略内容后缀 */
  tooltip?: boolean | React.ReactNode
}
```

:::

---

### 复制

:::caution
TODO:
:::

<br/>

## 源码

```jsx title="/src/components/Commons/Text/Text.tsx"
import React from "react"
import { Typography } from "antd"
const { Paragraph } = Typography


interface CustomEllipsis {
  rows: number
  expandable: boolean
  symbol: React.ReactNode
  suffix?: string
  tooltip?: boolean | React.ReactNode
}

interface CustomTextProps {
  textAlign?: "center" | "left" | "right"
  color?: "secondary" | "danger"
  strong?: boolean
  ellipsis?: false | CustomEllipsis
  copyable?: boolean
  isText?: boolean
  isCode?: boolean
  isQuote?: boolean
  isPreBlock?: boolean
  children?: React.ReactNode
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
```
