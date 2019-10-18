import React from "react"
import GitHubRepository from "./github-repository"

export default class GithubRepositories extends React.Component {
  render() {
    const data = this.props.source

    let sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);

    return <div>
      {sorted.map((repo, index) => <GitHubRepository source={repo} key={index}/>)}
    </div>
  }
}
