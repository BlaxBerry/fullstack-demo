import React, { CSSProperties } from 'react'
import { BackTop as AntBackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'


const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    fontSize: "1.5rem",
};

export default function BackTop() {
    return (
        <AntBackTop >
            <div style={style}>
                <UpOutlined />
            </div>
        </AntBackTop>
    )
}
