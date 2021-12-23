import React from 'react'
import { Layout as AntdLayout } from 'antd';
const { Content } = AntdLayout;
import Sider from '../Nav/Sider/Sider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export default function Layout({ children, pathName, location }) {

    return (
        <AntdLayout>
            {/* left sider */}
            <Sider pathName={pathName} />

            {/* content */}
            <AntdLayout>
                <Header />
                <Content style={{ padding: "1rem" }}>
                    <div>{children}</div>
                </Content>
                <Footer />
            </AntdLayout>
        </AntdLayout>
    )
}
