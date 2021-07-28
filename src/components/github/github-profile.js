import React, { useEffect, useState } from "react"
import GithubIdentity from "./github-identity"
import GithubRepositories from "./github-repositories"
import Loading from "../indicators/loading"
import Error from "../indicators/error"

const GitHubProfile = () => {
  const identityEndpoint = "https://api.github.com/users/thanosparavantis"
  const repositoriesEndpoint = "https://api.github.com/users/thanosparavantis/repos"
  const [identityData, setIdentityData] = useState(null)
  const [repositoryData, setRepositoryData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(identityEndpoint)
      .then(response => response.json())
      .then(data => setIdentityData(data))
      .catch(error => setError(true))
  }, [])

  useEffect(() => {
    fetch(repositoriesEndpoint)
      .then(response => response.json())
      .then(data => setRepositoryData(data))
      .catch(error => setError(true))
  }, [])

  if (error) {
    return <Error />
  } else if (identityData && repositoryData) {
    return (
      <>
        <GithubIdentity source={identityData} />
        <GithubRepositories source={repositoryData} />
      </>
    )
  } else {
    return <Loading />
  }
}

export default GitHubProfile