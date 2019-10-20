import NavbarLink from "./navbar-link"
import { faArrowCircleLeft, faCode, faEnvelopeOpenText, faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const NavbarExpanded = ({ onLinkClick, onToggleClick }) => (
  <nav className="z-50 fixed top-0 left-0 w-screen h-screen flex flex-col bg-green-800 text-white shadow-lg overflow-auto md:w-auto">
    <h1 className="h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg px-10 md:h-32">
      thanosparavantis.com
    </h1>
    <div className="flex flex-col flex-shrink-0">
      <NavbarLink href="/" title="Home" icon={faHome} onClick={onLinkClick}/>
      <NavbarLink href="/about/" title="About" icon={faQuestionCircle} onClick={onLinkClick}/>
      <NavbarLink href="/projects/" title="Projects" icon={faCode} onClick={onLinkClick}/>
      <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} onClick={onLinkClick}/>
    </div>
    <button onClick={onToggleClick} className="flex items-center justify-center flex-shrink-0 px-5 h-16 bg-green-900 hover:bg-yellow-600 focus:bg-yellow-700 md:mt-auto">
      <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-3" size="lg"/>
      <div className="font-bold">Minimize</div>
    </button>
  </nav>
)

export default NavbarExpanded
