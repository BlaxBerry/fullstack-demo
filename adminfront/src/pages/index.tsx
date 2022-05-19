import { navigate } from "gatsby"
import { useMount } from "ahooks"

const IndexPage = (): JSX.Element => {
  useMount(() => {
    navigate("/home")
  })

  return null
}

export default IndexPage
