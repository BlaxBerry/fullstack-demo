import { Meta, Story } from "@storybook/react"
import CustomTimeLine, { TimeLineProps } from "./TimeLine"
import { ClockCircleOutlined as AntdIconClock } from "@ant-design/icons"

export default {
  title: "Common/TimeLine",
  component: CustomTimeLine,
} as Meta

const Template: Story<TimeLineProps> = args => <CustomTimeLine {...args} />

export const TimeLine = Template.bind({})
TimeLine.storyName = "TimeLine"
TimeLine.args = {
  mode: "alternate",
  reverse: false,
  pending: true,
  lines: [
    { content: "节点aaaa" },
    { content: "节点bbbb", dotColor: "red" },
    { content: "节点cccc", dotCustom: <AntdIconClock /> },
    { content: "节点dddd", label: "补充内容补充内容" },
    {
      content: "节点eeee",
      label: (
        <h5>
          <AntdIconClock />
          &nbsp;补充内容补充内容
        </h5>
      ),
    },
  ],
}

TimeLine.argTypes = {
  lines: {
    description: "节点数组",
    table: {
      type: {
        summary: "Array<objec>",
        detail: `content: 节点内容\nlabel?: 补充标签内容\ndotColor?:  自定义小圆点颜色\ndotCustom?: 自定义小圆店 Icon`,
      },
    },
  },
  mode: {
    description: "时间轴竖线的位置",
    table: { type: { summary: "string" } },
    control: {
      type: "select",
      options: ["left", "alternate", "right"],
    },
  },
  reverse: { description: "节点数组翻转排列" },
  pending: { description: "是否最后额外展示一项`loading`状态的幽灵节点" },
}
