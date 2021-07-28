import React from "react"
import NavbarLink from "./navbar-link"
import { faCode, faEnvelopeOpenText, faHome, faQuestionCircle, faRss } from "@fortawesome/free-solid-svg-icons"

export default function NavbarDesktop() {
  return (
    <div>
      <nav className="bg-green-700 w-56 z-10 hidden fixed left-0 top-0 h-full
                    md:flex flex-col text-white overflow-auto shadow-lg">
        <div className="my-12">
          <h1 className="font-bold text-lg px-5">
            Thanos Paravantis
          </h1>
        </div>
        <NavbarLink href="/" title="Home" icon={faHome} />
        <NavbarLink href="/about/" title="About" icon={faQuestionCircle} />
        <NavbarLink href="/projects/" title="Projects" icon={faCode} />
        <NavbarLink href="/activity/" title="Activity" icon={faRss} />
        <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} />
      </nav>
    </div>
  )
}