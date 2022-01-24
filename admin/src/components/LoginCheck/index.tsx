import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../Layout/Layout'

const LoginCheck = (props: PageProps) => {

    return <Layout {...props}>{props.children}</Layout>
}

export default LoginCheck