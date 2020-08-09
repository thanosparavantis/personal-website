import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faLinkedinIn, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { graphql, StaticQuery } from "gatsby"

const query = graphql`
  query SocialButtons {
    site {
      siteMetadata {
        facebookLink
        twitterLink
        linkedinLink
        githubLink
        mediumLink
      }
    }
  }
`

const SocialButtonStack = () => (
  <StaticQuery query={query} render={data => {
    const facebookLink = data.site.siteMetadata.facebookLink
    const twitterLink = data.site.siteMetadata.twitterLink
    const linkedinLink = data.site.siteMetadata.linkedinLink
    const githubLink = data.site.siteMetadata.githubLink
    const mediumLink = data.site.siteMetadata.mediumLink

    return (
      <div className="flex flex-col w-full md:flex-row items-center justify-center">
        <a href={facebookLink} rel="noopener noreferrer" title="Visit my Facebook page"
           className="rounded-full text-center mb-3 p-5 md:w-16 text-white flex align-center items-center justify-center
           bg-yellow-600 shadow-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline active:bg-yellow-800 md:mb-0 md:mr-12 w-64">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="mr-3 md:mr-0"/>
          </div>
          <span className="md:hidden">Facebook</span>
        </a>
        <a href={twitterLink} rel="noopener noreferrer" title="Visit my Twitter profile"
           className="rounded-full text-center mb-3 p-5 md:w-16 text-white flex align-center items-center justify-center
           bg-yellow-600 shadow-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline active:bg-yellow-800 md:mb-0 md:mr-12 w-64">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-3 md:mr-0"/>
          </div>
          <span className="md:hidden">Twitter</span>
        </a>
        <a href={linkedinLink} rel="noopener noreferrer" title="Visit my LinkedIn profile"
           className="rounded-full text-center mb-3 p-5 md:w-16 text-white flex align-center items-center justify-center
           bg-yellow-600 shadow-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline active:bg-yellow-800 md:mb-0 md:mr-12 w-64">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
          </div>
          <span className="md:hidden">LinkedIn</span>
        </a>
        <a href={githubLink} rel="noopener noreferrer" title="Visit my GitHub profile"
           className="rounded-full text-center mb-3 p-5 md:w-16 text-white flex align-center items-center justify-center
           bg-yellow-600 shadow-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline active:bg-yellow-800 md:mb-0 w-64">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faGithub} size="lg" className="mr-3 md:mr-0"/>
          </div>
          <span className="md:hidden">GitHub</span>
        </a>
      </div>
    )
  }}/>
)

export default SocialButtonStack
