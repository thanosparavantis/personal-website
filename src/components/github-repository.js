import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "react-timeago/lib"

export default class GitHubRepository extends React.Component {
  render() {
    const repo = this.props.source

    return <a href={repo.html_url} className="block p-10 border-dashed border-t border-gray-400 text-center hover:bg-gray-100 focus:bg-gray-200 md:text-left" title={"Visit " + repo.name + " on GitHub"}>
      <h1 className="uppercase font-bold text-sm text-green-800">
        <FontAwesomeIcon icon={faCode} className="mr-2"/>
        {repo.name}
      </h1>
      <div className="flex flex-col items-center justify-center mt-1 mb-3 text-xs text-gray-900 font-bold md:justify-start md:flex-row">
        {repo.language ?
          <div className="bg-gray-300 px-2 rounded-full mb-2 md:mb-0 md:mr-6">
            {repo.language}
          </div> : ""}
        <div className="bg-gray-300 px-2 rounded-full mb-2 md:mb-0 md:mr-6">
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
