import React from 'react'
import { Menu } from 'antd';
import { NAVIGATION } from '../../../lib/default';
import { Link } from 'gatsby';

export default function SideNav({ pathname }) {

    const setSubMenuLayout = (item) => (
        <Menu.SubMenu key={item.name} icon={item.icon || null} title={item.name}>
            {
                item.sub.map(subItem => (
                    <Menu.Item key={subItem.to} icon={subItem.icon || null}>
                        <Link to={subItem.to}>{subItem.name}</Link>
                    </Menu.Item>
                ))
            }
        </Menu.SubMenu>
    )

    const select = ({ key }) => {
        console.log(key);
    }

    return (
        <Menu
            className='sider-nav-bar'
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={['设置']}
            mode="inline"
            theme="dark"
            onSelect={select}
        >
            {
                NAVIGATION.map((item, index) => (
                    <React.Fragment key={index}>
                        {
                            item.sub
                                ? setSubMenuLayout(item)
                                : (
                                    <Menu.Item key={item.to} icon={item.icon || null}>
                                        <Link to={item.to}>{item.name}</Link>
                                    </Menu.Item>
                                )
                        }
                    </React.Fragment>
                ))
            }
        </Menu >
    )
}
