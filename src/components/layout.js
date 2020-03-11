import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { menuLinks } from "../pages"
import Header from "./header"
import Arrow from "../images/arrow.svg"
import PropTypes from "prop-types"

const Layout = props => {

  const { children, classvar, active = 0, onChnge, title, container = true } = props

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
    <div className={`${container ? "container": "container-fluid"} app ${classvar}`}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onChnge={onChnge}
        active={active}
      />

        <div className="row">
          <div className={`col-md-${menuLinks[active].offset}`}></div>
          <h1>{title}</h1>
        </div>

      <main>
        {children}
      </main>
      <nav className={"row low-nav-wrap"}>
        <div className="nav-arrow col-sm-1 push-right">
          <div
            className="arrow-down"
            onClick={onChnge(active === menuLinks.length - 1 ? 0 : active + 1)}
          >
            <Arrow />
          </div>
          <div
            className="arrow-up"
            onClick={onChnge(active < 1 ? menuLinks.length - 1 : active - 1)}
          >
            <Arrow />
          </div>
        </div>
      </nav>
      { container && <div className="stripes row">
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
      </div>}
    </div>
  )
}
Layout.propTypes = {
  siteTitle: PropTypes.string,
  onChnge: PropTypes.func
}

Layout.defaultProps = {
  siteTitle: ``,
  onChnge: () => 1
}

export default Layout
