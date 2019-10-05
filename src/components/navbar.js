import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faArrowCircleLeft, faArrowCircleRight, faHome, faQuestionCircle, faShareAlt, faEnvelopeOpenText, faGlobe } from '@fortawesome/free-solid-svg-icons'

class NavbarLink extends React.Component {
  render() {
    const title = this.props.title
    const icon = this.props.icon
    const href = this.props.href
    const isSmall = this.props.isSmall

    return (
      <Link to={href} className="flex items-center h-20 px-5 mb-2 text-md hover:bg-yellow-600 focus:bg-yellow-700" title={isSmall ? title : ""} activeClassName="bg-green-900" onClick={this.props.onClick}>
        <FontAwesomeIcon icon={icon} className={isSmall ? "" : "mr-3"} />
        {isSmall ? "" : title}
      </Link>
    )
  }
}

class ExpandedNavbar extends React.Component {
  render() {
    return <div className="z-50 fixed top-0 left-0 w-screen h-screen md:w-auto">
      <nav className="relative h-full flex flex-col bg-green-800 text-white shadow-lg">
        <h1 className=" h-32 flex items-center justify-center font-bold text-lg px-10">
          thanosparavantis.com
          </h1>
        <div className="flex flex-col mb-8">
          <NavbarLink href="/" title="Home" icon={faHome} onClick={this.props.onLinkClick} />
          <NavbarLink href="/about/" title="About" icon={faQuestionCircle} onClick={this.props.onLinkClick} />
          <NavbarLink href="/social/" title="Social" icon={faShareAlt} onClick={this.props.onLinkClick} />
          <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} onClick={this.props.onLinkClick} />
        </div>
        <button onClick={this.props.onToggleClick} className="flex items-center justify-center px-5 h-16 mt-auto bg-green-900 hover:bg-yellow-600 focus:bg-yellow-700">
          <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-3" />
          <div className="font-bold">Minimize</div>
        </button>
      </nav>
    </div>
  }
}

class MinimizedNavbar extends React.Component {
  render() {
    return <div>
      <nav className="z-10 hidden fixed left-0 top-0 flex-col h-full bg-green-800 text-white shadow-lg md:flex">
        <h1 className="h-32 flex flex-shrink-0 items-center justify-center px-5">
          <FontAwesomeIcon icon={faGlobe} />
        </h1>
        <div className="mb-8 flex flex-col">
          <NavbarLink href="/" title="Home" icon={faHome} isSmall={true} onClick={this.props.onLinkClick} />
          <NavbarLink href="/about/" title="About" icon={faQuestionCircle} isSmall={true} onClick={this.props.onLinkClick} />
          <NavbarLink href="/social/" title="Social" icon={faShareAlt} isSmall={true} onClick={this.props.onLinkClick} />
          <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} isSmall={true} onClick={this.props.onLinkClick} />
        </div>
        <button onClick={this.props.onToggleClick} className="px-5 h-16 mt-auto flex items-center justify-center flex-shrink-0 bg-green-900 hover:bg-yellow-600 focus:bg-yellow-700">
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </nav>

      <nav className="z-10 h-16 fixed top-0 flex w-screen bg-green-800 text-white shadow-lg md:hidden">
        <h1 className="flex items-center justify-center font-bold text-sm px-10">
          thanosparavantis.com
            </h1>
        <button onClick={this.props.onToggleClick} className="h-16 px-5 ml-auto flex items-center justify-center flex-shrink-0 bg-green-900 hover:bg-yellow-600 focus:bg-yellow-700">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  }
}

export default class Navbar extends React.Component {
  render() {
    if (this.props.isOpened) {
      return <ExpandedNavbar onToggleClick={this.props.onToggleClick} onLinkClick={this.props.onLinkClick} />
    } else {
      return <MinimizedNavbar onToggleClick={this.props.onToggleClick} onLinkClick={this.props.onLinkClick} />
    }
  }
}
