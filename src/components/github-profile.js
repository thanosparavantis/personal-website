import React from "react"
import GithubIdentity from "./github-identity"
import GithubRepositories from "./github-repositories"

export default class GithubProfile extends React.Component {
  render() {
    return <div>
      <GithubIdentity/>
      <GithubRepositories/>
    </div>
  }
}
