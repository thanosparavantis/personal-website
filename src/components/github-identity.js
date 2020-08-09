import React from "react"
import { faCode, faRss, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GitHubIdentity = ({ source }) => (
  <div className="mb-5 text-gray-800 text-sm font-bold md:flex md:items-center">
    <div className="mb-2 md:mb-0 md:mr-5">
      <FontAwesomeIcon icon={faUsers} className="mr-2"/>
      {source.followers} followers
    </div>
    <div className="mb-2 md:mb-0 md:mr-5">
      <FontAwesomeIcon icon={faRss} className="mr-2"/>
      {source.following} following
    </div>
    <div>
      <FontAwesomeIcon icon={faCode} className="mr-2"/>
      {source.public_repos} repositories
    </div>
  </div>
)

export default GitHubIdentity
