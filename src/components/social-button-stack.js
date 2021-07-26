import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { graphql, StaticQuery } from "gatsby"

const query = graphql`
  query SocialButtons {
    site {
      siteMetadata {
        facebookLink
        twitterLink
        linkedinLink
        githubLink
        youtubeLink
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
    const youtubeLink = data.site.siteMetadata.youtubeLink

    return (
      <div className="flex flex-col w-full md:flex-row items-center justify-center">
        <a href={facebookLink}
           rel="noopener noreferrer"
           title="Visit my Facebook page"
           target="_blank"
           className="
            rounded-full text-center mb-3 p-5 md:w-16 text-white
            flex align-center items-center justify-center
            bg-blue-500 shadow-lg hover:bg-blue-600
            focus:outline-none focus:shadow-outline
            md:mb-0 md:mr-8 w-64 social-nudge-1">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="mr-3 md:mr-0" />
          </div>
          <span className="md:hidden">
            Facebook
          </span>
        </a>
        <a href={twitterLink}
           rel="noopener noreferrer"
           title="Visit my Twitter profile"
           target="_blank"
           className="
           rounded-full text-center mb-3 p-5 md:w-16 text-white
           flex align-center items-center justify-center
           bg-blue-400 shadow-lg hover:bg-blue-500
           focus:outline-none focus:shadow-outline
           md:mb-0 md:mr-8 w-64 social-nudge-2">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-3 md:mr-0" />
          </div>
          <span className="md:hidden">
            Twitter
          </span>
        </a>
        <a href={linkedinLink}
           rel="noopener noreferrer"
           title="Visit my LinkedIn profile"
           target="_blank"
           className="
           rounded-full text-center mb-3 p-5 md:w-16 text-white
           flex align-center items-center justify-center
           bg-blue-700 shadow-lg hover:bg-blue-800
           focus:outline-none focus:shadow-outline
           md:mb-0 md:mr-8 w-64 social-nudge-3">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </div>
          <span className="md:hidden">
            LinkedIn
          </span>
        </a>
        <a href={githubLink}
           rel="noopener noreferrer"
           title="Visit my GitHub profile"
           target="_blank"
           className="
           rounded-full text-center mb-3 p-5 md:w-16 text-white
           flex align-center items-center justify-center
           bg-gray-800 shadow-lg hover:bg-gray-700
           focus:outline-none focus:shadow-outline
           md:mb-0 md:mr-8 w-64 social-nudge-4">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faGithub} size="lg" className="mr-3 md:mr-0" />
          </div>
          <span className="md:hidden">
            GitHub
          </span>
        </a>
        <a href={youtubeLink}
           rel="noopener noreferrer"
           title="Visit my YouTube channel"
           target="_blank"
           className="
           rounded-full text-center mb-3 p-5 md:w-16 text-white
           flex align-center items-center justify-center
           bg-red-600 shadow-lg hover:bg-red-700
           focus:outline-none focus:shadow-outline
           md:mb-0 w-64 social-nudge-5">
          <div className="w-10 md:w-auto">
            <FontAwesomeIcon icon={faYoutube} size="lg" className="mr-3 md:mr-0" />
          </div>
          <span className="md:hidden">
            YouTube
          </span>
        </a>
      </div>
    )
  }} />
)

export default SocialButtonStack
