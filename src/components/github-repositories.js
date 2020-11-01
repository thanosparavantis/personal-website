import React from "react"
import GitHubRepository from "./github-repository"

const GitHubRepositories = ({ source }) => {
  const sorted = source.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
  )

  return (
    <div>
      {sorted.map((repo, index) => <GitHubRepository source={repo} key={index} />)}
    </div>
  )
}

export default GitHubRepositories
