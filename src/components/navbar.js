import React from "react"
import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"
import NavbarMobileExpanded from "./navbar-mobile-expanded"

export default function Navbar({ isOpened, onToggleClick, onLinkClick }) {
  return (
    <div>
      <NavbarDesktop />
      
      {isOpened ? (
        <NavbarMobileExpanded onToggleClick={onToggleClick} onLinkClick={onLinkClick} />
      ) : (
        <NavbarMobile onToggleClick={onToggleClick} />
      )}

    </div>
  )
}
