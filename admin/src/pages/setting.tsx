import * as React from "react"
import Seo from "../components/Seo/seo"
import { PageProps } from 'gatsby'

const IndexPage = ({ location }: PageProps) => {

    return (
        <>
            <Seo title="设置" />

            设置
        </>
    )
}

export default IndexPage
