import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {menuLinks} from "../pages"
import Header from "./header"

const Layout = ({ children, classname, active, onChange, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={"container app"}>
      <Header siteTitle={data.site.siteMetadata.title} onChange={onChange} active={active}/>
      <main className={classname}>
        <div className="row">
          <div className={`col-md-${menuLinks[active].offset}`}></div>
          <h1>{title}</h1>
        </div>
        {children}
      </main>
      <nav className={"row low-nav-wrap"}>
        <div className="nav-arrow col-sm-1 push-right">
          <div className="arrow-down" onClick={onChange(active < 1 ? menuLinks.length - 1 : active - 1)}></div>
          <div className="arrow-up" onClick={onChange(active === menuLinks.length-1 ? 0 : active + 1)}></div>
        </div>
      </nav>
      <div className="stripes row">
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
