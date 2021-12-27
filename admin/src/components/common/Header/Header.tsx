import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout as AntdLayout } from 'antd';
const { Header: AbtdHeader } = AntdLayout;

const Header = () => {


  return (
    <AbtdHeader className="header">
      <h1>Weding</h1>
    </AbtdHeader>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
