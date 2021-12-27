import * as React from "react"
import { useState } from "react"
import { navigate, PageProps } from 'gatsby'
import { Badge, Calendar, Typography, notification, Button, Space } from 'antd';
import Seo from "../../../components/Seo/seo"
import { Notification } from '../../../components/pages/date/index'
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const fake = [
  {
    date: "2021-11-29",
    list: [
      { id: "124", color: "red", text: "aaa" },
      { id: "14", color: "yellow", text: "aaa" },
      { id: "12", color: "yellow", text: "aaa" },
      { id: "2s4", color: "green", text: "aaa" },
      { id: "990", color: "blue", text: "aaa" },
      { id: "992", color: "blue", text: "aaa" },
    ]
  },
  {
    date: "2021-12-31",
    list: [
      { id: "24", color: "green", text: "aaa" },
      { id: "99", color: "blue", text: "aaa" },
    ]
  }
]


const IndexPage = ({ location }: PageProps) => {

  // 渲染有事项的日期内容
  const dateCellRender = (date) => {
    const content = fake.find(item => item.date == date.format('YYYY-MM-DD'))
    if (content) {
      // console.log(current);
      return (
        <ul>
          {
            content.list.map(item => (
              <li key={item.id}>
                <Badge color={item.color} text={item.text} />
              </li>
            ))
          }
        </ul>
      )
    }
  }

  // 渲染有事项的月份内容
  const monthCellRender = (date) => {
    const content = fake.find(item => {
      return item.date.substring(0, 7) == date.format('YYYY-MM')
    })
    return (
      <>
        {
          content
            ? <><Badge count={content.list.length} /> 事项</>
            : <div style={{ color: "#ccc" }}>空</div>
        }
      </>
    )
  }

  // 选中日期
  const onSelect = (date) => {
    const content = fake.find(item => item.date == date.format('YYYY-MM-DD'))
    const list = content?.list || []
    Notification(date.format('YYYY-MM-DD'), list)

    // openNotification(data)
    // navigate('/date/details', {
    //   state: {
    //     date: date.format('YYYY-MM-DD')
    //   }
    // })
  }


  return (
    <>
      <Seo title="首页" />

      {/* <Typography.Title level={3}>举行日期</Typography.Title> */}
      <div style={{ height: "60%" }}>
        <Calendar
          // mode="year"
          onSelect={onSelect}
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          locale={locale}
        // onPanelChange={onPanelChange}
        // fullscreen={false}
        />
      </div>
    </>
  )
}

export default IndexPage
