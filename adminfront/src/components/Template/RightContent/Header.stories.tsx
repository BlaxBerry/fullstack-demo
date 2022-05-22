import { Meta, Story } from "@storybook/react"
import ContentHeader from "./Header"

export default {
  title: "Layout/RightContent",
  component: ContentHeader,
} as Meta

const Template: Story = args => <ContentHeader {...args} />

export const Header = Template.bind({})
