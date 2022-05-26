import { Meta, Story } from "@storybook/react"
import ContentFooter, { ContentFooterProps } from "./Footer"

export default {
  title: "Layout/RightContent",
  component: ContentFooter,
} as Meta

const Template: Story<ContentFooterProps> = args => <ContentFooter {...args} />

export const Footer = Template.bind({})

Footer.argTypes = {
  children: {
    description: "自定义内容",
    table: {
      type: { summary: "string | ReactNode" },
      defaultValue: { summary: "@BlaxBerry" },
    },
    control: { type: "text" },
  },
}
