import React, { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { NAVIGATION } from '../../../lib/default';
import { Link } from 'gatsby';
const { SubMenu } = Menu;

const logoStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "60px",
    margin: 0
}


export default function SideNav({ pathname }) {

    const setSubMenuLayout = (item) => (
        <SubMenu key={item.name} icon={item.icon || null} title={item.name}>
            {
                item.sub.map(subItem => (
                    <Menu.Item key={subItem.to} icon={subItem.icon || null}>
                        <Link to={subItem.to}>{subItem.name}</Link>
                    </Menu.Item>
                ))
            }
        </SubMenu>
    )

    const select = ({ key }) => {
        console.log(key);
    }

    return (
        <Menu
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={['日期']}
            mode="inline"
            theme="dark"
            onSelect={select}
        >
            <Menu.Item key="logo" style={logoStyle} title="婚礼筹备">
                Logo
            </Menu.Item>

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
