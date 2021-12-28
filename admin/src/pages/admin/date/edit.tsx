import React from 'react'
import { Row, Col } from 'antd';
import Seo from "../../../components/Seo/seo"
import { DividerTitle } from '../../../components/common/index';
import { DateDetailsFrom, DetailsProgressBar } from '../../../components/pages/date/index'

export default function details({ location }) {

    // 当前日期详情
    const currentDetails = location.state

    return (
        <>
            <Seo title="事项" />
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    {/* title */}
                    <DividerTitle position="left" level={4} text="新增日期事项" />
                    {/* form */}
                    <DateDetailsFrom dataSource={currentDetails} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    {/* title */}
                    <DividerTitle position="left" level={4} text="详情说明" />
                    {/* bars */}
                    <DetailsProgressBar dataSource={currentDetails}/>
                </Col>
            </Row>


        </>
    )
}
