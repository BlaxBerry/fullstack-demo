import { Meta, Story } from "@storybook/react"
import CustomButton, { ButtonProps } from "./Button"
import { SearchOutlined } from "@ant-design/icons"

export default {
  title: "Common/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<ButtonProps> = args => <CustomButton {...args} />

// storybook 控制台的 controls 中不显示的 props
const hideControlsArgsType = {
  children: { table: { disable: true } },
  block: { table: { disable: true } },
  text: { table: { disable: true } },
  dashed: { table: { disable: true } },
  fab: { table: { disable: true } },
  capsule: { table: { disable: true } },
  large: { table: { disable: true } },
  small: { table: { disable: true } },
  disabled: { table: { disable: true } },
  loading: { table: { disable: true } },
}

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
Basic.argTypes = { ...hideControlsArgsType }

/* Fab 圆形的图标按钮 */
export const Fab = Template.bind({})
Fab.args = { fab: true, children: <SearchOutlined /> }
Fab.argTypes = { ...hideControlsArgsType }

/* Capsule 胶囊形状的按钮 */
export const Capsule = Template.bind({})
Capsule.args = { capsule: true, children: "文本内容" }
Capsule.argTypes = { ...hideControlsArgsType }

/* Text 文本形状的按钮 */
export const Text = Template.bind({})
Text.args = { text: true, children: "文本内容" }
Text.argTypes = { ...hideControlsArgsType }

/* dashed 虚线边框的按钮 */
export const Dashed = Template.bind({})
Dashed.args = { dashed: true, children: "文本内容" }
Dashed.argTypes = { ...hideControlsArgsType }

/* block 块级按钮 */
export const Block = Template.bind({})
Block.args = { block: true, children: "文本内容" }
Block.argTypes = { ...hideControlsArgsType }

/* large 尺寸的按钮 */
export const Large = Template.bind({})
Large.args = { large: true, children: "文本内容" }
Large.argTypes = { ...hideControlsArgsType }

/* small 尺寸的按钮 */
export const Small = Template.bind({})
Small.args = { small: true, children: "文本内容" }
Small.argTypes = { ...hideControlsArgsType }

/* Loading 加载状态的按钮 */
export const Loading = Template.bind({})
Loading.args = { loading: true, children: "文本内容" }
Loading.argTypes = { ...hideControlsArgsType }

/* disabled 不可选中 */
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: "文本内容" }
Disabled.argTypes = { ...hideControlsArgsType }
