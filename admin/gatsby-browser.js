/**
 * Implement Gatsby's Browser APIs in this file.
 * You can delete this file if you're not using it
 * @see https://www.gatsbyjs.com/docs/browser-apis
 */
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./src/Apollo";
import Layout from "./src/components/Templates/Layout/Layout";
import "./src/style/index.scss";
import { ConfigProvider } from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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