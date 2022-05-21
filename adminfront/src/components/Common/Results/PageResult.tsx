import * as React from "react"
import { Result as AntdResult } from "antd"
import {
  ResultProps as AntdResultProps,
  ResultStatusType,
} from "antd/lib/result"

/**
 * 继承 AntDesign <Result/> 的 props
 * https://ant.design/components/result-cn/#components-result-demo-success
 */
export interface ResultProps extends AntdResultProps {
  status: ResultStatusType /* success | error | info | warning | 404 | 403 | 500 */
  title: string | React.ReactNode
  subTitle?: string | React.ReactNode
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
