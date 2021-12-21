import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby';
import { Layout, Menu, Button } from 'antd';
const { Sider: AntdSider } = Layout;
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { DEFAULT_SIDER } from '../../../lib/default/index'


export default function Sider({ pathName }) {
    const localStorageCollapsedStatus = localStorage.getItem('wedding-nav-collapsed')?.toString()
    const status = localStorageCollapsedStatus && localStorageCollapsedStatus === 'true' ? true : false
    const [collapsed, setCollapsed] = useState(status)
    const toggle = useCallback(() => {
        setCollapsed(collapsed => !collapsed)
        localStorage.setItem('wedding-nav-collapsed', (!collapsed).toString())
    }, [collapsed])


    return (
        <AntdSider
            className='sider'
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            {/* logo */}
            <Button type="link" className='header' onClick={toggle}>
                {
                    collapsed
                        ? <RightOutlined />
                        : <LeftOutlined />
                }
            </Button>
            {/* menu */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathName]}>
                {
                    DEFAULT_SIDER.map((item, index) => (
                        <Menu.Item key={item.to} icon={item.icon}>
                            <Link to={item.to}>
                                &nbsp;{item.title}
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </AntdSider>
    )
}
