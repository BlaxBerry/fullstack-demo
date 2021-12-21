import * as React from "react"
// import { Link } from "gatsby"
import Seo from "../components/Seo/seo"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <>
    <Seo title="Home" />

    <h1>client home</h1>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </>
)

export default IndexPage
