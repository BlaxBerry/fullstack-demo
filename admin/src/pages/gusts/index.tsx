import * as React from "react"
import { PageProps } from 'gatsby'
import Seo from "../../components/Seo/seo"
import { Tabs } from 'antd';
// const { TabPane } = Tabs;
// import { GustsTable } from "../../components/pages/gusts";


const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        contact: "09011112222",
        tags: []

    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        contact: "09011112222",
        tags: []
    },
]



const IndexPage = ({ location }: PageProps) => {

    return (
        <>
            <Seo title="亲友" />

            {/* <GustsTable dataSource={dataSource} /> */}

            {/* <Tabs style={{ padding: " 0 1rem" }}>
                <TabPane tab="全部" key="1">
                    <GustsTable dataSource={dataSource} />
                </TabPane>
                <TabPane tab="男方亲友" key="2">
                    <GustsTable dataSource={dataSource} />
                </TabPane>
                <TabPane tab="女方亲友" key="3">
                    <GustsTable dataSource={[]} />
                </TabPane>
            </Tabs> */}
        </>
    )
}

export default IndexPage
