import React, { useState } from "react"
import Seo from "../../components/Seo/seo"
import { PageProps } from 'gatsby'


const IndexPage = ({ location }: PageProps) => {

    return (
        <>
            <Seo title="首页" />

            <h1>Home index</h1>

            {
                [...new Array(30)]
                    .map(
                        () => `
                        Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        `,
                    )
                    .join('\n')
            }
        </>
    )
}

export default IndexPage
