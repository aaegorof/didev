import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Home" />
        <h1><span className={"color-primary"}>Di</span>gital <span className={"color-primary"}>Dev</span>elopment</h1>

      </Layout>
  )
}

export default IndexPage
