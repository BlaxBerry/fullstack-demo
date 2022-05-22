import React from "react"
import { Timeline } from "antd"

export interface TimeLineItemProps {
  content: string /* 节点内容 */
  label?: string | React.ReactNode /* 补充标签内容 */
  dotColor?: string /* 自定义小圆点颜色 */
  dotCustom?: React.ReactNode /* 自定义小圆点 Icon */
}

/**
 * 基于 Antd TimeLine
 * https://ant.design/components/timeline-cn/#components-timeline-demo-basic
 */
export interface TimeLineProps {
  lines: Array<TimeLineItemProps>
  mode?: "left" | "alternate" | "right" /* 时间轴位置 */
  reverse?: boolean /* 是否倒叙排列 */
  pending?: boolean /* 是否最后额外展示一项幽灵节点 */
}

const TimeLine = ({
  lines,
  mode = "alternate",
  reverse = false,
  pending = false,
}: TimeLineProps) => {
  return (
    <Timeline mode={mode} reverse={reverse} pending={pending}>
      {lines?.map(
        ({ content, label, dotColor, dotCustom }: TimeLineItemProps) => (
          <Timeline.Item color={dotColor} label={label} dot={dotCustom}>
            {content}
          </Timeline.Item>
        )
      )}
    </Timeline>
  )
}

export default TimeLine
