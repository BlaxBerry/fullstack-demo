import React from 'react';
import {
    HomeOutlined,
    SettingOutlined,
    PictureOutlined,
    TeamOutlined,
    EditOutlined,
    ClockCircleOutlined,
    CalendarOutlined,
    TagsOutlined,
} from '@ant-design/icons';

export const NAVIGATION = [
    {
        name: "首页",
        icon: <HomeOutlined />,
        to: "/admin"
    },
    // {
    //     name: "亲友",
    //     icon: <TeamOutlined />,
    //     to: "/admin/gusts/",
    //     sub: [
    //         {
    //             name: "全部",
    //             to: "/admin/gusts/",
    //             icon: <TeamOutlined />,
    //         }
    //     ]
    // },
    // {
    //     name: "图片",
    //     icon: <PictureOutlined />,
    //     to: "/admin/images"
    // },
    // {
    //     name: "亲友",
    //     icon: <TeamOutlined />,
    //     to: "/admin/gusts/",
    // sub: [
    //     {
    //         name: "全部",
    //         to: "/admin/gusts/",
    //         icon: <TeamOutlined />,
    //     },
    // {
    //     name: "a",
    //     to: "/admin/gusts/a"
    // },
    // {
    //     name: "b",
    //     to: "/admin/gusts/b"
    // },
    //     {
    //         name: "编辑",
    //         icon: <EditOutlined />,
    //         to: "/admin/gusts/edit"
    //     }
    // ]
    // },
    {
        name: "设置",
        icon: <SettingOutlined />,
        sub: [
            {
                name: "设置项 a",
                to: "/admin/setting/a"
            },
            {
                name: "设置项 b",
                to: "/admin/setting/b"
            },
        ]
    }
]