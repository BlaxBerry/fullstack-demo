import { Meta, Story } from "@storybook/react"
import CustomResult, { ResultProps } from "./PageResult"

export default {
  title: "Common/Results",
  component: CustomResult,
} as Meta

// TODO: 放入 <Layout/> 中展示到视图
const Template: Story<ResultProps> = args => <CustomResult {...args} />

export const PageResult = Template.bind({})

PageResult.storyName = "PageResult"

PageResult.args = {
  status: "404",
  title: "自定义标题",
  subTitle: "自定义副标题",
  children: (
    <>
      {/* TODO: 展示 <Button/> */}
      自定义内容
    </>
  ),
}

PageResult.argTypes = {
  status: {
    type: { name: "string", required: true },
    description: "类型",
    table: { type: { summary: "string" }, defaultValue: { summary: "info" } },
    control: {
      type: "select",
      options: ["success", "error", "info", "warning", "404", "403", "500"],
    },
  },
  title: {
    type: { name: "string", required: true },
    description: "主标题",
    table: {
      type: { summary: "string | ReactNode" },
    },
  },
  subTitle: {
    description: "副标题",
    table: {
      type: { summary: "string | ReactNode" },
    },
  },
  children: {
    description: "自定义内容",
    table: {
      type: { summary: "ReactNode" },
    },
    control: {
      type: null,
    },
  },
}
