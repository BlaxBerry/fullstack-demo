import { Progress } from 'antd'
import React from 'react'

export default function DetailsProgressBar({ dataSource }) {

    // 通过日期查询数据库数据
    const { list } = dataSource.list || []
    // console.log(list);



    const final = [
        {
            color: "red",
            count: 2
        },
        {
            color: "blue",
            count: 1
        }
    ]
    let totalCount = 0
    final.forEach(item => {
        totalCount += item.count
    })


    return (
        <div>
            {
                list?.length
                    ? (
                        <>
                            {
                                final.map(item => (
                                    // <Progress percent={30} size="small" strokeColor="pink" />
                                    <Progress
                                        percent={Math.ceil((item.count / totalCount) * 100)}
                                        key={item.color}
                                        size="small"
                                        status="active"
                                        strokeColor={item.color}
                                    />
                                ))
                            }
                        </>
                    )
                    : null
            }
        </div>
    )
}
