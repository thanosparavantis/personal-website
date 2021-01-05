import NavbarLink from "./navbar-link"
import {
  faArrowCircleUp,
  faCode,
  faEnvelopeOpenText,
  faHome,
  faQuestionCircle,
  faRss,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function NavbarMobileExpanded({ onToggleClick, onLinkClick }) {
  return (
    <nav className="navbar z-50 fixed top-0 left-0 w-screen h-screen
                  flex flex-col text-white
                  shadow-lg overflow-auto md:w-auto md:hidden">
      <h1 className="h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg px-10 md:h-32">
        Thanos Paravantis
      </h1>
      <div className="flex flex-col flex-shrink-0">
        <NavbarLink href="/" title="Home" icon={faHome} onClick={onLinkClick} />
        <NavbarLink href="/about/" title="About" icon={faQuestionCircle} onClick={onLinkClick} />
        <NavbarLink href="/projects/" title="Projects" icon={faCode} onClick={onLinkClick} />
        <NavbarLink href="/activity/" title="Activity" icon={faRss} onClick={onLinkClick} />
        <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} onClick={onLinkClick} />
      </div>
      <button onClick={onToggleClick} className="navbar-link navbar-link-active
                                                 flex items-center justify-center flex-shrink-0
                                                 px-5 h-16
                                                 focus:outline-none focus:shadow-outline md:mt-auto">
        <FontAwesomeIcon icon={faArrowCircleUp} className="mr-3" size="lg" />
        <div className="font-bold">Minimize</div>
      </button>
    </nav>
  )
}