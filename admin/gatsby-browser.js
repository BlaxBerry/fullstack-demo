import React from "react";
import { ConfigProvider } from 'antd';
import { ApolloProvider } from "@apollo/client";
import client from "./src/Apollo";
import Layout from "./src/components/Layout/Layout.tsx";
import "./src/style/index.scss";
import zhCN from 'antd/lib/locale/zh_CN';

/**
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser#wrapRootElement
 * @param element
 * @return {JSX.Element}
 */
export const wrapRootElement = ({ element }) => {
    return (
        <ApolloProvider client={client}>
            <ConfigProvider locale={zhCN}>
                {element}
            </ConfigProvider>
        </ApolloProvider>
    )
}


/**
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser#wrapRootElement
 * @param element
 * @return {JSX.Element}
 */
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}