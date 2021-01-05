import { Link } from "gatsby"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function NavbarMobile({ onToggleClick }) {
  return (
    <nav className="navbar z-10 h-16 fixed top-0 flex w-screen text-white shadow-lg md:hidden">
      <Link to="/" className="flex items-center justify-center font-bold text-sm px-5">
        Thanos Paravantis
      </Link>
      <button onClick={onToggleClick} aria-label="Expand Navigation"
              className="h-16 px-5 ml-auto flex items-center justify-center
                  flex-shrink-0 flex-shrink-0 bg-green-800 active:bg-green-900
                  focus:outline-none focus:shadow-outline">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
    </nav>
  )
}
