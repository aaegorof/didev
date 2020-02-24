import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
import { menuLinks } from "../pages"

const Header = ({ onChnge, active }) => (
  <header>
    <div className={"row"}>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul className={"row align-center"}>
          {menuLinks.map((a, i) => (
            <li key={a.name}>
              <a
                href="#"
                className={`menu-link ${i == active ? "active" : ""}`}
                onClick={onChnge(i)}
              >
                {a.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onChnge: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
  onChnge: () => 1
}

export default Header
