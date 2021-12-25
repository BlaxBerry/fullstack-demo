import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Button, Select } from 'antd';
import GustTableSelect from './GustsTableSelect'

interface Item {
    key: string
    name: string
    age: number
    address: string
    contact: string
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = title === '区分' ? <GustTableSelect /> : <Input />

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0, padding: 0 }}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const EditableTable = ({ dataSource }) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(dataSource);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
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
            title: '名称',
            dataIndex: 'name',
            // width: '25%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            // width: '15%',
            editable: true,
        },
        {
            title: '联系方式',
            dataIndex: 'contact',
            // width: '15%',
            editable: true,
        },
        {
            title: '区分',
            dataIndex: 'tags',
            // width: '40%',
            editable: true,
            render: () => {
                return <GustTableSelect />
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <Space>
                        <Button type='primary' onClick={() => save(record.key)}>
                            保存
                        </Button>
                        <Popconfirm title="确定不保存?" onConfirm={cancel}>
                            <Button danger type='primary' >
                                放弃
                            </Button>
                        </Popconfirm>
                    </Space>
                ) : (
                    <Space>
                        <Button className='success-button' type='primary' disabled={editingKey !== ''} onClick={() => edit(record)}>
                            编辑
                        </Button>
                        <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.key)}>
                            <Button danger type='primary' disabled={editingKey !== ''} >
                                删除
                            </Button>
                        </Popconfirm>

                    </Space >
                );
            },
        },
    ];

    // React.useEffect(() => {
    //     console.log(data);
    // }, [data])

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'type' ? 'select' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const handleDelete = (key) => {
        setData(data.filter(item => item.key !== key));
    };

    const handleAdd = () => {
        const newRow = {
            key: (data.length + 1).toString(),
            name: "?",
            age: "?",
            contact: "?",
            address: "?",
        };
        setData([...data, newRow])
    };

    const handleSave = () => {
        console.log(data);
    }

    return (
        <>
            <Space>
                <Button type='primary' className='success-button' onClick={handleAdd}>新增</Button>
                <Button type='primary' onClick={handleSave}>保存</Button>
            </Space>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </>
    );
};

export default EditableTable 