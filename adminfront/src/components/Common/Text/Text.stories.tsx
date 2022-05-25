import { Meta, Story } from "@storybook/react"
import CustomText, { CustomTextProps } from "./Text"

export default {
  title: "Common/Text",
  component: CustomText,
} as Meta

/* 包裹组件的视图的模版 */
const Template: Story<CustomTextProps> = args => <CustomText {...args} />

/* 侧边栏展示内容 */
export const Text = Template.bind({})

/**
 * 传递自定义props属性
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Text.args = {
  quote: false,
  children:
    "你好你好你好你好你好你好你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好",
  align: "left",
  color: "red",
  strong: false,
  copyable: false,
  ellipsis: {
    rows: 2,
    expandable: true,
    symbol: "展开",
    suffix: " XXXX ",
  },
}

/**
 * 自定义视图下方控制面板中设置
 * https://storybook.js.org/docs/react/api/argtypes
 * @Controls https://storybook.js.org/docs/react/essentials/controls
 */
Text.argTypes = {
  quote: {
    description: "文本是否为引用注释",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  children: {
    type: { name: "string", required: true },
    description: "文本内容",
    table: {
      type: { summary: "string | ReactNode" },
      defaultValue: { summary: "!!! 无内容 !!!" },
    },
    control: {
      type: "text",
    },
  },
  align: {
    description: "**普通文本**的对齐方式",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "left" },
    },
    control: {
      type: "radio",
      options: ["left", "center", "right"],
    },
  },
  color: {
    description: "**普通文本**的颜色",
    table: { type: { summary: "string" } },
    control: "color",
  },
  strong: {
    description: "**普通文本**的粗细",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  copyable: {
    description: "**普通文本**是否可复制",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  ellipsis: {
    description: "**普通文本**是否省略溢出",
    table: {
      type: {
        summary: "false | object",
        detail: `rows:number 最多显示的行数\nexpandable:boolean 是否可展开\nsymbol:React.ReactNode 自定义展按钮\nsuffix?:string 自定义省略内容后缀\ntooltip?:boolean|ReactNode 提示信息`,
      },
      defaultValue: { summary: "false" },
    },
  },
}

/**
 * 自定义侧边栏展示名
 */
// Text.storyName = 'CamelCase'

/**
 * 自定义视图模版样式
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
// Text.decorators = [
//   (Story) => (
//     <div style={{ padding: '3em' }}>
//       <Story />
//     </div>
//   ),
// ]

/**
 *
 * https://storybook.js.org/docs/react/writing-stories/parameters
 */
// Text.parameters = { }

/**
 * action
 *
 */
// Text.play = async ({ canvasElement }) => {}
