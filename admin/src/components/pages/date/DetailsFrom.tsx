import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link, navigate } from 'gatsby';
import {
    Form,
    Input,
    Button,
    Space,
    Select,
    Row,
    Col,
    Badge,
    Popconfirm
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;


// {
//     date: "2021-11-29",
//     list: [
//       { id: "124", color: "red", text: "aaa" },
//       { id: "14", color: "pink", text: "aaa" },
//     ]
//   },

const DEFAULT_COLOR_OPTIONS = ["yellow", "red", "pink", "green", "blue", "purple"]

export default function DateDetailsForm({ dataSource }) {

    const [data, setData] = useState(dataSource)
    const [form] = Form.useForm();

    useEffect(() => {
        if (!data) { navigate('/date') }
    }, [])

    const onFinish = (value: any) => {
        const finalList = value.list.map((item: any) => {
            if (!item.id) { item.id = uuidv4() }
            return item
        })
        value.list = finalList
        console.log(value);
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={data}
            onFinish={onFinish}
        >
            <Form.Item name="date" label="日期">
                <Input disabled={data?.date} />
            </Form.Item>


            <div style={{ margin: "0 0 8px" }}>事项</div>
            <Form.List name="list">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Row key={field.key} gutter={8} align="middle">
                                <Col>
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'color']}
                                        // label={"类型"}
                                        rules={[{ required: true, message: '不能为空' }]}
                                    >
                                        <Select placeholder="类型" size='large'>
                                            {
                                                DEFAULT_COLOR_OPTIONS.map(c => (
                                                    <Option value={c} key={c}>
                                                        <Badge color={c} />
                                                    </Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col flex="auto">
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'text']}
                                        // label="事项"
                                        rules={[{ required: true, message: '不能为空' }]}
                                    >
                                        <Input placeholder='事项内容' size="large" />
                                    </Form.Item>
                                </Col>

                                {/* remove button */}
                                <Col>
                                    <Form.Item>
                                        <Popconfirm
                                            title="确定删除?"
                                            onConfirm={() => remove(field.name)}
                                            okText="删除"
                                            cancelText="放弃"
                                        >
                                            <Button danger ghost shape="circle" icon={<DeleteOutlined />} />
                                        </Popconfirm>

                                    </Form.Item>
                                </Col>
                            </Row>
                        ))}

                        {/* add button*/}
                        <Form.Item>
                            <Button block type='primary' icon={<PlusOutlined />} onClick={() => add()}>
                                新增事项
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Form.Item style={{ textAlign: "right" }}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                    <Button danger type="primary">
                        <Link to="/date">返回</Link>
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
