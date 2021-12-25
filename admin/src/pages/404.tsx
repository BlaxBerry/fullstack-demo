import * as React from "react"
import Seo from "../components/Seo/seo"
import { Result, Button } from 'antd';
import { Link } from "gatsby";

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />

    <Result
      status="404"
      title="404"
      subTitle="抱歉，出错了..."
      extra={
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      }
    />
  </>
)

export default NotFoundPage
