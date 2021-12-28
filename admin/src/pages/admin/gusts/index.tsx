import React, { useState } from 'react';
import {
    Table,
    Input,
    InputNumber,
    Popconfirm,
    Form,
    Button,
    Space
} from 'antd';
import Seo from "../../../components/Seo/seo"

const originData = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber min={1} /> : <Input />;
    return (
        <td {...restProps}>
            {editing
                ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                required: true,
                                message: `${title}不能为空`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                )
                : (children)
            }
        </td>
    );
};

export default function EditableTable() {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => { setEditingKey('') };

    const handleDelete = (key: React.Key) => {
        const newData = [...data];
        setData(newData => newData.filter(item => item.key !== key));
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: '称呼',
            dataIndex: 'name',
            width: 120,
            fixed: true,
            editable: true,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            width: 150,
            editable: true,
        },
        {
            title: '地址',
            dataIndex: 'address',
            width: 150,
            editable: true,
        },
        {
            title: '操作',
            width: 170,
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable
                    ? (
                        <Space>
                            <Button type='primary' onClick={() => save(record.key)} >
                                修改
                            </Button>
                            <Popconfirm title="确定放弃?" onConfirm={cancel}>
                                <Button danger type='primary'>
                                    放弃
                                </Button>
                            </Popconfirm>
                        </Space>
                    )
                    : (
                        <Space>
                            <Button type='primary'
                                className='success-button'
                                disabled={editingKey !== ''}
                                onClick={() => edit(record)}
                            >
                                编辑
                            </Button>
                            <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.key)}>
                                <Button type='primary' danger disabled={editingKey !== ''}>
                                    删除
                                </Button>
                            </Popconfirm>
                        </Space>
                    );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) { return col }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <>
            <Seo title="亲友" />
            <Form form={form} component={false} >
                <Table
                    bordered
                    components={{
                        body: { cell: EditableCell },
                    }}
                    dataSource={data}
                    columns={mergedColumns}
                    pagination={{ onChange: cancel }}
                    scroll={{ y: "62vh" }}
                />
            </Form>
        </>
    );
};