import React from 'react';
import {
    HomeOutlined,
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
    {
        name: "图片",
        icon: <PictureOutlined />,
        to: "/admin/images"
    },
    {
        name: "亲友",
        icon: <TeamOutlined />,
        sub: [
            {
                name: "全部",
                to: "/admin/gusts/",
                icon: <TeamOutlined />,
            },
            // {
            //     name: "a",
            //     to: "/admin/gusts/a"
            // },
            // {
            //     name: "b",
            //     to: "/admin/gusts/b"
            // },
            {
                name: "编辑",
                icon: <EditOutlined />,
                to: "/admin/gusts/edit"
            }
        ]
    },
    {
        name: "日期",
        icon: <ClockCircleOutlined />,
        sub: [
            {
                name: "日历",
                icon: <CalendarOutlined />,
                to: "/admin/date/calendar"
            },
            {
                name: "事项",
                icon: <TagsOutlined />,
                to: "/admin/date/edit"
            },
        ]
    }
]