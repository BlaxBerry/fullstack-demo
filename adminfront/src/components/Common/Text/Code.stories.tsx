import { Meta, Story } from "@storybook/react"
import CustomCode, { CodeProps } from "./Code"

export default {
  title: "Common/Text",
  component: CustomCode,
} as Meta

const Template: Story<CodeProps> = args => <CustomCode {...args} />

export const Code = Template.bind({})
Code.args = {
  children: `
    name = '沃尼玛'\n
    age = 28\n\n\n
    def func():\n
        print('hello')\n\n
    func()
  `,
  block: true,
  strong: false,
  copyable: true,
}

Code.argTypes = {
  children: {
    type: { name: "string", required: true },
    description: "文本内容",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "!!! 无内容 !!!" },
    },
    control: {
      type: "text",
    },
  },
  strong: {
    description: "**代码片段**的粗细",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  block: {
    description: "是否为**代码块**，默认为一行显示的**代码片段**",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  copyable: {
    description: "是否可复制",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
}
