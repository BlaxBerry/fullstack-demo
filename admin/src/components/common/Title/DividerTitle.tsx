import React from 'react'
import { Divider, Typography } from 'antd'
const { Title } = Typography

type Props = {
    position: "left" | "right" | "center",
    level: 1 | 2 | 3 | 4 | 5,
    text: string,
    style?: any
}

const DividerTitle = (props: Props) => {
    const { position, level, text } = props

    return (
        <Divider orientation={position}>
            <Title level={level}>
                {text}
            </Title>
        </Divider>
    )
}
export default DividerTitle