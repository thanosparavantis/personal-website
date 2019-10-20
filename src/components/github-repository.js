import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "react-timeago/lib"

const GitHubRepository = ({ source }) => (
  <a href={source.html_url} className="block p-10 border-t border-dashed border-gray-400 hover:bg-gray-100 focus:bg-gray-200 focus:shadow-outline" title={"Visit " + source.name + " on GitHub"}>
    <h1 className="uppercase font-bold text-sm text-green-800">
      <FontAwesomeIcon icon={faCode} className="mr-2"/>
      {source.name}
    </h1>
    <div className="flex flex-wrap mt-2 mb-3 text-xs text-gray-900 font-bold md:justify-start">
      {source.language ?
        <div className="bg-gray-300 px-2 rounded-full mr-6">
          {source.language}
        </div> : ""}
      <div className="bg-gray-300 px-2 rounded-full mr-6">
        {source.stargazers_count} Stars
      </div>
      <div className="bg-gray-300 px-2 rounded-full">
        <TimeAgo date={source.updated_at}/>
      </div>
    </div>
    <p className="text-sm leading-relaxed text-gray-800">{source.description}</p>
  </a>
)

export default GitHubRepository
