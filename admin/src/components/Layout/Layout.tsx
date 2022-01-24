import React, { useEffect, useState } from 'react'
import { useBoolean } from 'ahooks'
import { Link } from 'gatsby';
import { Layout as AntLayout, Button, } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { SiderNav, Footer } from '../common/index'

const {
    Header: AntHeader,
    Sider: AntSider,
    Content: AntContent
} = AntLayout

export default function Layout({ children, location }) {
    // toggle collapsed state
    const [state, { toggle }] = useBoolean(false)

    return (
        <AntLayout className='wrap-layout'>

            {/* left sider  */}
            <AntSider
                className='wrap-layout-side'
                trigger={null}
                collapsible
                collapsed={state}
            >
                <div className='logo'>
                    <Link to="/">
                        <img src="/logo.png" alt="logo" />
                        {state ? null : <span>Wedding</span>}
                    </Link>
                </div>
                <SiderNav pathname={location.pathname} />
                <Button className='sider-collapsed-toggle-btn' type="link" onClick={toggle}>
                    {state ? <RightOutlined /> : (<><LeftOutlined />&nbsp;&nbsp;折叠</>)}
                </Button>
            </AntSider>

            {/* right content */}
            <AntLayout className='layout-wrap-content'>
                {/* header */}
                <AntHeader className='wrap-content-header' />
                {/* main content */}
                <AntContent className='wrap-content-content'>
                    <>
                        <div className="content">
                            {children}
                        </div>
                        {/* footer */}
                        <Footer />
                    </>
                </AntContent>
            </AntLayout>
        </AntLayout>
    )
}
