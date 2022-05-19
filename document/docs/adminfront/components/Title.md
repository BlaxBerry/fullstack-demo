# Title 标题

用于展示文本类型标题

标题内容为字符串，通过属性 `title` 或 `subTitle` 传递

:::caution
可能会修改
:::

## 属性

```jsx
interface TextTitleProps {
  title?: string
  subTitle?: string
  size: 5 | 1 | 2 | 3 | 4 /* h1~h5 标签 */
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
```

<br/>

## 使用

### 普通标题

```jsx
<Title title='hello' size={1}/>
```

---

### 副标题

```jsx
<Title subTitle='hello' size={5}/>
```

---

### 分割线

```jsx
<Title 
    subTitle='hello'
    size={5} 
    withDivide
    dividerPosition='center'
/>
```

<br/>

## 源码

```jsx title="/src/components/Commons/Titles/TextTitle.tsx"
import React from "react"
import { Typography, Divider } from "antd"
const { Title: AntdTitle } = Typography

interface TextTitleProps {
  title?: string
  subTitle?: string
  size: 5 | 1 | 2 | 3 | 4
  color?: "secondary" | "danger"
  ellipsis?: boolean
  textAlign?: "center" | "left" | "right"
  isCode?: boolean
  copyable?: boolean
  withDivide?: boolean
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
```
