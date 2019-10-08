import React from "react"
import GitHubRepository from "./github-repository"

export default class GithubRepositories extends React.Component {
  render() {
    const data = this.props.source

    let sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return <div>
      {sorted.map((repo, index) => <GitHubRepository source={repo} key={index}/>)}
    </div>
  }
}
