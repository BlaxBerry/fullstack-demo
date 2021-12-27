import React, { CSSProperties } from 'react'
import { useState } from 'react'
import { Layout as AntLayout, Button, } from 'antd';
const {
    Header: AntHeader,
    Footer: AntFooter,
    Sider: AntSider,
    Content: AntContent
} = AntLayout
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { SiderNav, Footer } from '../common/index'

type Style = {
    layout: CSSProperties,
    sider: CSSProperties,
    header: CSSProperties,
    content: CSSProperties,
}
const style: Style = {
    layout: {
        minHeight: '100vh'
    },
    sider: {

    },
    header: {
        padding: "1rem"
    },
    content: {
        overflowY: "scroll",
        height: "100vh",
        backgroundColor: "white"
    }
}



export default function Layout({ children, location }) {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(collapsed => !collapsed)
    };

    return (
        <AntLayout style={style.layout}>

            {/* left sider  */}
            <AntSider trigger={null} collapsible collapsed={collapsed}>
                <SiderNav pathname={location.pathname} />
                <Button type="link" onClick={toggleCollapsed} className='nav-sider-toggle-btn'>
                    {collapsed ? <RightOutlined /> : <LeftOutlined />}
                </Button>
            </AntSider>

            {/* right content */}
            <AntLayout style={style.content}>
                {/* header */}
                <AntHeader style={style.header}>

                </AntHeader>
                {/* main content */}
                <AntContent style={{ padding: '1rem' }}>
                    <>
                        {children}
                    </>
                </AntContent>
                {/* footer */}
                {/* <AntFooter> <Footer /> </AntFooter> */}
            </AntLayout>
        </AntLayout>
    )
}
