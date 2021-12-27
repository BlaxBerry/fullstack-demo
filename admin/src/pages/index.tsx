import React from 'react'
import { navigate } from 'gatsby'

const IndexPage = (): JSX.Element => {

    React.useEffect(() => {
        navigate('/admin')
    }, [])

    return <></>
}

export default IndexPage