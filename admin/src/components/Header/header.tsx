import * as React from "react"
import PropTypes from "prop-types"
import { Layout as AntdLayout } from 'antd';
const { Header: AbtdHeader } = AntdLayout;

const Header = ({ siteTitle }) => (
  <AbtdHeader className="header">
    <h1> {siteTitle} Header </h1>
  </AbtdHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
