import React from 'react'
import { Layout as AntdLayout } from 'antd';
const { Content } = AntdLayout;
import Sider from '../Nav/Sider/Sider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export default function Layout({ children, location }) {

    return (
        <AntdLayout>
            {/* left sider */}
            <Sider pathname={location.pathname} />

            {/* right content */}
            <AntdLayout>
                <Header />
                <Content className='layout-content'>
                    <div className='main-content'>
                        {children}
                    </div>
                    <Footer />
                </Content>
            </AntdLayout>
        </AntdLayout >
    )
}
