import { Meta, Story } from "@storybook/react"
import CustomButton, { ButtonProps } from "./Button"
import { SearchOutlined } from "@ant-design/icons"

export default {
  title: "Common/Button",
  component: CustomButton,
} as Meta

const Template: Story<ButtonProps> = args => <CustomButton {...args} />

/* 标准 */
export const Basic = Template.bind({})
Basic.args = {
  children: (
    <>
      <SearchOutlined />
      &nbsp;
      {"文本内容"}&nbsp;
      <SearchOutlined />
    </>
  ),
}
Basic.argTypes = {
  children: { table: { disable: true } },
}

/* Fab 圆形的图标按钮 */
export const Fab = Template.bind({})
Fab.args = { fab: true, children: <SearchOutlined /> }
Fab.argTypes = {
  fab: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* Capsule 胶囊形状的按钮 */
export const Capsule = Template.bind({})
Capsule.args = { capsule: true, children: "文本内容" }
Capsule.argTypes = {
  capsule: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* Text 文本形状的按钮 */
export const Text = Template.bind({})
Text.args = { text: true, children: "文本内容" }
Text.argTypes = {
  text: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* dashed 虚线边框的按钮 */
export const Dashed = Template.bind({})
Dashed.args = { dashed: true, children: "文本内容" }
Dashed.argTypes = {
  dashed: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* block 块级按钮 */
export const Block = Template.bind({})
Block.args = { block: true, children: "文本内容" }
Block.argTypes = {
  block: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* large 尺寸的按钮 */
export const Large = Template.bind({})
Large.args = { large: true, children: "文本内容" }
Large.argTypes = {
  large: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* small 尺寸的按钮 */
export const Small = Template.bind({})
Small.args = { small: true, children: "文本内容" }
Small.argTypes = {
  small: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* Loading 加载状态的按钮 */
export const Loading = Template.bind({})
Loading.args = { loading: true, children: "文本内容" }
Loading.argTypes = {
  loading: { table: { disable: true } },
  children: { table: { disable: true } },
}

/* disabled 不可选中 */
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: "文本内容" }
Disabled.argTypes = {
  disabled: { table: { disable: true } },
  children: { table: { disable: true } },
}
