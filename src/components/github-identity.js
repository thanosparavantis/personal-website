import React from "react"
import { faUsers, faRss, faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class GithubIdentity extends React.Component {
  render() {
    const data = this.props.source

    return <a href={data.html_url} className="flex flex-col items-center justify-center text-center p-10 hover:bg-gray-100 focus:bg-gray-200" title={"Visit " + data.name + "'s profile on GitHub"}>
      <h1 className="text-xl font-bold text-gray-900">
        Projects on GitHub
      </h1>
      <div className="my-3 text-gray-800 text-sm font-bold md:flex md:items-center">
        <div className="mb-2 md:mb-0 md:mr-5">
          <FontAwesomeIcon icon={faUsers} className="mr-2"/>
          {data.followers} followers
        </div>
        <div className="mb-2 md:mb-0 md:mr-5">
          <FontAwesomeIcon icon={faRss} className="mr-2"/>
          {data.following} following
        </div>
        <div>
          <FontAwesomeIcon icon={faCode} className="mr-2"/>
          {data.public_repos} repositories
        </div>
      </div>
    </a>
  }
}
