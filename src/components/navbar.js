import React from "react"
import NavbarExpanded from "./navbar-expanded"
import NavbarMinimized from "./navbar-minimized"

const Navbar = ({ isOpened, onToggleClick, onLinkClick }) => {
  if (isOpened) {
    return <NavbarExpanded onToggleClick={onToggleClick} onLinkClick={onLinkClick}/>
  } else {
    return <NavbarMinimized onToggleClick={onToggleClick} onLinkClick={onLinkClick}/>
  }
}

export default Navbar
