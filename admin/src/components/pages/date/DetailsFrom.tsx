import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link, navigate } from 'gatsby';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Space,
    Select,
    Row,
    Col,
    Badge,
    Popconfirm,
    DatePicker
} from 'antd';
const { Option } = Select;
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

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

    const onFinish = (value: any) => {
        const { date, list } = value
        let newList = list ? list.map((item: any) => {
            if (!item.id) { item.id = uuidv4() }
            return item
        }) : []
        const finalValue = {
            date: date.format('YYYY-MM-DD'),
            list: newList
        }
        console.log(finalValue);
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={data}
            onFinish={onFinish}
        >
            <Form.Item name="date" label="日期" rules={[{ required: true, message: '不能为空' }]}>
                {
                    data?.date
                        ? <Input disabled style={{ width: "100%", textAlign: "center" }} />
                        : (
                            <DatePicker
                                placeholder="选择日期"
                                style={{ width: "100%", textAlign: "center" }}
                                locale={locale}
                            />
                        )
                }
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
                                        <Select placeholder="类">
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
                                        <Input placeholder='事项内容' />
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
                        <Link to="/admin/date/calendar">日历一览</Link>
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
