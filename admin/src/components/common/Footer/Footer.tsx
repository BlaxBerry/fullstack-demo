import React from 'react'
import { Layout as AntdLayout } from 'antd';
const { Footer: AntdFooter } = AntdLayout;

export default function Footer() {
    return (
        <AntdFooter className='footer'>
            <small>Wedding Admin ©2021 Created by BlaxBerry</small>
        </AntdFooter>
    )
}
