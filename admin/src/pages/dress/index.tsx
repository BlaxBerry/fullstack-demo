import * as React from "react"
import Seo from "../../components/Seo/seo"
import { PageProps } from 'gatsby'
import { Image } from 'antd';

const IndexPage = ({ location }: PageProps) => {

    return (
        <>
            <Seo title="婚纱" />

            <Image height={300} src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />

        </>
    )
}

export default IndexPage
