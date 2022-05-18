import * as React from "react"
import { BackTop } from "antd"

interface BackToTopProps {
  children?: React.ReactNode
}

const BackToTop = (props: BackToTopProps): JSX.Element => (
  <div style={{ height: "150vh" }}>
    {props.children}
    <BackTop />
  </div>
)

export default BackToTop
