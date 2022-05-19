import * as React from "react"
import { Button } from "antd"
import Layout from "../components/Template"
import Result from "../components/Common/Results"

const IndexPage = (): JSX.Element => {
  return (
    <Layout pageTitle={"404"}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      >
        <Button type="primary">Back Home</Button>
      </Result>
    </Layout>
  )
}

export default IndexPage
