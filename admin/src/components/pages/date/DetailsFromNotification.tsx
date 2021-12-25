import React from 'react'
import { navigate } from 'gatsby';
import { Badge, Button, notification, Space } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { DividerTitle } from '../../common/Title';


const DetailsFromNotification = (date, list) => {
    const key = `open${Date.now()}`
    notification.open({
        message: title(date, list),
        description: description(list),
        btn: btn(key, date, list),
        key: key,
        duration: 0
    });
}

// layout
const title = (date, list) => (
    <DividerTitle position="left" level={4} text={date} style={{ margin: 0 }} />
)

// layout
const description = (list) => (
    <>
        {
            list.length
                ? (
                    <ul>
                        {
                            list.map(item => (
                                <li key={item.id}>
                                    <Badge color={item.color} text={item.text} />
                                </li>
                            ))
                        }
                    </ul>
                )
                : (<>无事项 &nbsp;<FrownOutlined /></>)
        }
    </>
)

// layout
const btn = (key, date, list) => (
    <Space>
        <Button
            type="primary"
            className={!list.length ? "success-button" : ""}
            onClick={() => edit(key, date, list)}
        >
            {list.length ? "编辑" : "新增"}
        </Button>
        <Button
            danger
            type="primary"
            onClick={() => close(key)}
        >
            关闭
        </Button>
    </Space>
)

const edit = (key, date, list) => {
    notification.close(key)
    navigate('/date/edit', { state: { date, list } })
}
const close = (key) => notification.close(key)

export default DetailsFromNotification