import * as React from "react"
import Seo from "../../components/Seo/seo"
import { PageProps } from 'gatsby'

const IndexPage = ({ location }: PageProps) => {

    return (
        <>
            <Seo title="笔记" />

            笔记
        </>
    )
}

export default IndexPage
