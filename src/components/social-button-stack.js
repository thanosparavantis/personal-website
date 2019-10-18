import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default class SocialButtonStack extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-full md:flex-row max-w-lg">
        <a href="https://twitter.com/thparavantis" target="_blank" rel="noopener noreferrer" title="Visit my Twitter profile" className="block w-full text-center mb-2 px-5 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline md:mb-0 md:mr-4">
          <FontAwesomeIcon icon={faTwitter} className="mr-2" size="lg"/>
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/thanosparavantis" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile" className="block w-full text-center mb-2 px-5 py-3 text-white bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline md:mb-0 md:mr-4">
          <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" size="lg"/>
          LinkedIn
        </a>
        <a href="https://github.com/thanosparavantis" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile" className="block w-full text-center px-5 py-3 text-white bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline">
          <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg"/>
          GitHub
        </a>
      </div>
    )
  }
}
