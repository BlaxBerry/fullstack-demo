import * as React from "react"
import { Result as AntdResult } from "antd"
import { ResultStatusType } from "antd/lib/result"

interface ResultProps {
  status: ResultStatusType
  title: React.ReactNode
  subTitle: React.ReactNode
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Result = (props: ResultProps): JSX.Element => {
  return (
    <AntdResult
      status={props.status}
      title={props.title}
      subTitle={props.subTitle}
      extra={<>{props.children}</>}
    />
  )
}

export default Result
