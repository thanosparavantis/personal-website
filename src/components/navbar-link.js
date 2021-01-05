import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const NavbarLink = ({ title, icon, href, onClick }) => (
  <Link to={href} className="navbar-link flex items-center
                             h-16 px-5 mb-2
                             focus:outline-none focus:shadow-outline
                             flex-shrink-0 font-bold"
        title={title}
        activeClassName="navbar-link-active"
        onClick={onClick}>
    <div className="w-10">
      <FontAwesomeIcon icon={icon} size={"lg"} />
    </div>
    <div>{title}</div>
  </Link>
)

export default NavbarLink
