import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const NavbarLink = ({ title, icon, href, isSmall, onClick }) => (
  <Link to={href} className={`flex items-center h-16 px-5 mb-2 hover:bg-green-800
  active:bg-green-900 focus:outline-none focus:shadow-outline md:h-20 ${isSmall ? `justify-center` : ``}`}
        title={isSmall ? title : ""} activeClassName="bg-green-800" onClick={onClick}>
    <div className={isSmall ? "" : "w-10"}>
      <FontAwesomeIcon icon={icon} size={"lg"}/>
    </div>
    {isSmall ? "" : title}
  </Link>
)

export default NavbarLink
