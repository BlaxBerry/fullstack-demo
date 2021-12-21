import * as React from "react"
// import { Link } from "gatsby"
import Seo from "../components/Seo/seo"
import { Button } from 'antd';

const IndexPage = () => (
  <>
    <Seo title="Home" />

    <h1>admin home</h1>

    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </>
)

export default IndexPage
