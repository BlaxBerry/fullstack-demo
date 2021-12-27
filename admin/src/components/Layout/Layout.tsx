import React, { useState } from 'react'
import { Button, Layout as AntLayout } from 'antd';
const {
    Header: AntHeader,
    Footer: AntFooter,
    Sider: AntSider,
    Content: AntContent
} = AntLayout

import { SiderNav } from '../common/index'


export default function Layout({ children }) {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(collapsed => !collapsed)
    };

    return (
        <AntLayout style={{ minHeight: '100vh' }}>
            {/* left sider  */}
            <AntSider trigger={null} collapsible collapsed={collapsed}>
                <SiderNav collapsed={collapsed} />
            </AntSider>
            {/* right content */}
            <AntLayout>
                {/* header */}
                <AntHeader>
                    <Button type="primary" onClick={toggleCollapsed}>
                        {collapsed ? "展开" : "收起"}
                    </Button>
                </AntHeader>
                {/* main content */}
                <AntContent>{children}</AntContent>
                {/* footer */}
                <AntFooter>Footer</AntFooter>
            </AntLayout>
        </AntLayout>
    )
}
