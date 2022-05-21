import React from "react"
import { Helmet } from "react-helmet"

export interface PageTitleProps {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  )
}

export default PageTitle
