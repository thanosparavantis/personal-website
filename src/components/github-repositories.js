import React from "react"
import GitHubRepository from "./github-repository"

const GitHubRepositories = ({ source }) => {
  const sorted = source.sort((a, b) => b.stargazers_count - a.stargazers_count)

  return (
    <div>
      {sorted.map((repo, index) => <GitHubRepository source={repo} key={index}/>)}
    </div>
  )
}

export default GitHubRepositories
