import React from "react"
import Content from "./index"

export default {
  component: Content,
  title: "Layout/RightContent",
}
const Template = (args: unknown) => <Content {...args} />

export const RightContent = Template.bind({})
RightContent.storyName = "Template"
RightContent.args = {
  children: (
    <div>
      <h1>Title</h1>
      <p>自定义页面内容</p>
      <p>自定义页面内容</p>
      <p>自定义页面内容</p>
    </div>
  ),
}
RightContent.argTypes = {
  children: {
    description: "自定义内容",
    table: { type: { summary: "string | ReactNode" } },
    control: { type: "text" },
  },
}
