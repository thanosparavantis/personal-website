import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import NavbarLink from "./navbar-link"
import { faArrowCircleRight, faBars, faCode, faEnvelopeOpenText, faHome, faQuestionCircle, faRss, faSkiing } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const query = graphql`
  query MinimizedNavbar {
      logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
              fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
              }
          }
      },
  }
`

const NavbarMinimized = ({ onLinkClick, onToggleClick }) => (
  <StaticQuery query={query} render={data => {
    const logo = data.logo.childImageSharp.fluid
    return (
      <div>
        <nav className="w-20 z-10 hidden fixed left-0 top-0 flex-col h-full bg-green-700 text-white shadow-lg overflow-auto md:flex">
          <h1 className="h-32 flex flex-shrink-0 items-center justify-center px-5">
            <Img fluid={logo} className="w-full" alt="Website Logo" title="Website Logo"/>
          </h1>
          <div className="mb-8 flex flex-col">
            <NavbarLink href="/" title="Home" icon={faHome} isSmall={true} onClick={onLinkClick}/>
            <NavbarLink href="/about/" title="About" icon={faQuestionCircle} isSmall={true} onClick={onLinkClick}/>
            <NavbarLink href="/projects/" title="Projects" icon={faCode} isSmall={true} onClick={onLinkClick}/>
            <NavbarLink href="/activity/" title="Activity" icon={faRss} isSmall={true} onClick={onLinkClick}/>
            <NavbarLink href="/contact/" title="Contact" icon={faEnvelopeOpenText} isSmall={true} onClick={onLinkClick}/>
          </div>
          <button onClick={onToggleClick} aria-label="Expand Navigation"
                  className="px-5 h-16 mt-auto flex items-center justify-center
                  flex-shrink-0 bg-green-800 active:bg-green-900
                  hover:bg-green-900 focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon icon={faArrowCircleRight} size="lg"/>
          </button>
        </nav>
        <nav className="z-10 h-16 fixed top-0 flex w-screen bg-green-700 text-white shadow-lg md:hidden">
          <Link to="/" className="flex items-center justify-center font-bold text-sm px-5">
            thanosparavantis.com
          </Link>
          <button onClick={onToggleClick} aria-label="Expand Navigation"
                  className="h-16 px-5 ml-auto flex items-center justify-center
                  flex-shrink-0 flex-shrink-0 bg-green-800 active:bg-green-900
                  focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </button>
        </nav>
      </div>
    )
  }}/>
)

export default NavbarMinimized
