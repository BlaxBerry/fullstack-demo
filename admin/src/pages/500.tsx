import * as React from "react"
import Seo from "../components/Seo/seo"
import { Result, Button } from 'antd';
import { Link } from "gatsby";

const ServerError = () => (
  <>
    <Seo title="500: Server Error" />

    <Result
      status="500"
      title="500"
      subTitle="抱歉，出错了..."
      extra={
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      }
    />
  </>
)

export default ServerError