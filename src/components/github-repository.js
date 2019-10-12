import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "react-timeago/lib"

export default class GitHubRepository extends React.Component {
  render() {
    const repo = this.props.source

    return <a href={repo.html_url} className="block p-10 border-t border-dashed border-gray-400 hover:bg-gray-100 focus:bg-gray-200 focus:shadow-outline" title={"Visit " + repo.name + " on GitHub"}>
      <h1 className="uppercase font-bold text-sm text-green-800">
        <FontAwesomeIcon icon={faCode} className="mr-2"/>
        {repo.name}
      </h1>
      <div className="flex flex-wrap mt-2 mb-3 text-xs text-gray-900 font-bold md:justify-start">
        {repo.language ?
          <div className="bg-gray-300 px-2 rounded-full mr-6">
            {repo.language}
          </div> : ""}
        <div className="bg-gray-300 px-2 rounded-full mr-6">
          {repo.stargazers_count} Stars
        </div>
        <div className="bg-gray-300 px-2 rounded-full">
          <TimeAgo date={repo.updated_at}/>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-800">{repo.description}</p>
    </a>
  }
}
