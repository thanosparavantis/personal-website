import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "react-timeago/lib"

const GitHubRepository = ({ source }) => (
  <a href={source.html_url}
     className="mt-3 rounded block p-5 bg-gray-200 border
                hover:bg-gray-300 focus:bg-gray-300 focus:outline-none
                focus:shadow-outline active:bg-gray-400"
     title={`Learn more about ${source.name} on GitHub`}
     rel="noopener noreferrer"
     target="_blank">
    <h1 className="uppercase font-bold text-sm text-gray-900">
      <FontAwesomeIcon icon={faCode} className="mr-2" />
      {source.name}
    </h1>
    <div className="flex flex-wrap mt-2 mb-3 text-xs text-gray-900 font-bold md:justify-start">
      {source.language ?
        <div className="bg-green-200 px-2 rounded-full mr-2 text-gray-900">
          {source.language}
        </div> : ""}
      <div className="bg-green-200 px-2 rounded-full mr-2 text-gray-900">
        {source.stargazers_count} Stars
      </div>
      <div className="bg-green-200 px-2 rounded-full text-gray-900">
        <TimeAgo date={source.updated_at} />
      </div>
    </div>
    <p className="text-sm leading-relaxed text-gray-800">
      {source.description}
    </p>
  </a>
)

export default GitHubRepository
