import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import Logo from "../images/logo.svg"
import { menuLinks } from "../pages"
import Hamburger from "../images/mobile_menu.svg"

const Header = ({ onChnge, active }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return <header>
    <div className={"row"}>
      <Link to="/" onClick={onChnge(0)}>
        <Logo />
      </Link>
      <nav className={`main-menu ${isMenuOpen ? "opened" :""}`}>
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
      <Hamburger className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>
  </header>
}


Header.propTypes = {
  siteTitle: PropTypes.string,
  onChnge: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
  onChnge: () => 1
}

export default Header
