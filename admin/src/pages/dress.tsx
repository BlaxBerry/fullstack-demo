import * as React from "react"
import Seo from "../components/Seo/seo"
import Layout from "../components/Layout/Layout";
import { PageProps } from 'gatsby'

const IndexPage = ({ location }: PageProps) => {

    return (
        <Layout pathName={location.pathname}>
            <Seo title="婚纱" />

            婚纱
        </Layout>
    )
}

export default IndexPage
