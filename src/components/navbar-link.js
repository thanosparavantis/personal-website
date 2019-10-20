import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const NavbarLink = ({ title, icon, href, isSmall, onClick }) => (
  <Link to={href} className={`flex items-center h-16 px-5 mb-2 text-md hover:bg-yellow-600 focus:bg-yellow-700 md:h-20 ${isSmall ? `justify-center` : ``}`} title={isSmall ? title : ""} activeClassName="bg-green-900" onClick={onClick}>
    <FontAwesomeIcon icon={icon} className={isSmall ? "" : "mr-3"} size="lg"/>
    {isSmall ? "" : title}
  </Link>
)

export default NavbarLink
