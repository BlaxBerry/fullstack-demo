import { Meta, Story } from "@storybook/react"
import CustomTitle, { TextTitleProps } from "./TextTiitle"

export default {
  title: "Common/Title",
  component: CustomTitle,
} as Meta

const Template: Story<TextTitleProps> = args => <CustomTitle {...args} />

export const Title = Template.bind({})

Title.storyName = "TextTiitle"

Title.args = {
  title: "主标题",
  subTitle: "副标题",
  size: 2,
  align: "center",
  color: "crimson",
  subSize: 5,
  subColor: "crimson",
  withDivide: true,
  dividerPosition: "center",
}

Title.argTypes = {
  title: {
    type: { name: "string", required: true },
    description: "**主标题**文本",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "!!! EMPYTY CONTENT !!!" },
    },
    control: "text",
  },
  subTitle: {
    description: "**副标题**文本",
    table: {
      type: { summary: "string" },
    },
    control: "text",
  },
  size: {
    type: { name: "string", required: true },
    description: "**主标题**大小",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "3" },
    },
    control: {
      type: "radio",
      options: [1, 2, 3, 4, 5],
    },
  },
  color: {
    description: "**主标题**颜色",
    table: { type: { summary: "string" } },
    control: "color",
  },
  align: {
    description: "标题对齐方式",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "left" },
    },
    control: {
      type: "radio",
      options: ["left", "center", "right"],
    },
  },
  subSize: {
    type: { name: "string", required: true },
    description: "**副标题**大小",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "5" },
    },
    control: {
      type: "radio",
      options: [1, 2, 3, 4, 5],
    },
  },
  subColor: {
    description: "**副标题**颜色",
    table: { type: { summary: "string" } },
    control: "color",
  },
  withDivide: {
    description: "是否搭配分割线",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  dividerPosition: {
    description: "标题在分割线中的位置",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "center" },
    },
    control: {
      type: "radio",
      options: ["left", "center", "right"],
    },
  },
}
