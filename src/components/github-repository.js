import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default class GitHubRepository extends React.Component {
  render() {
    const repo = this.props.source

    return <a href={repo.html_url} className="block p-10 border-b border-gray-400 text-center bg-gray-200 hover:bg-gray-300 lg:text-left">
      <h1 className="uppercase font-bold text-sm text-green-800">
        <FontAwesomeIcon icon={faCode} className="mr-2"/>
        {repo.name}
      </h1>
      <div className="flex flex-col items-center justify-center mt-1 mb-3 text-sm text-gray-900 uppercase font-bold lg:justify-start lg:flex-row">
        {repo.language ?
          <div className="lg:mr-6">
            {repo.language}
          </div> : ""}
        <div className="lg:mr-6">
          {repo.stargazers_count} Stars
        </div>
        <div>
          {repo.watchers_count} Watchers
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-800">{repo.description}</p>
    </a>
  }
}
