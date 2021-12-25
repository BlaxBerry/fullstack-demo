import React from 'react';
import {
    HomeOutlined,
    SkinOutlined,
    BankOutlined,
    TeamOutlined,
    DollarCircleOutlined,
    EditOutlined,
    SettingOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

export const DEFAULT_SIDER = [
    {
        title: "首页",
        to: "/",
        icon: <HomeOutlined />
    },
    {
        title: "婚纱",
        to: "/dress",
        icon: < SkinOutlined />
    },
    {
        title: "日期",
        to: "/date",
        icon: <ClockCircleOutlined />
    },
    {
        title: "景点",
        to: "/spots",
        icon: <BankOutlined />
    },
    {
        title: "亲友",
        to: "/gusts",
        icon: <TeamOutlined />
    },
    {
        title: "费用",
        to: "/cost",
        icon: <DollarCircleOutlined />
    },
    {
        title: "笔记",
        to: "/notes",
        icon: <EditOutlined />
    },
    {
        title: "设置",
        to: "/setting",
        icon: <SettingOutlined />
    }
]