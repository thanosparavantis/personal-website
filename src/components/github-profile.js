import React, { useEffect, useState } from "react"
import GithubIdentity from "./github-identity"
import GithubRepositories from "./github-repositories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faExclamation } from "@fortawesome/free-solid-svg-icons"

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

  if (identityData && repositoryData) {
    return (
      <div>
        <GithubIdentity source={identityData}/>
        <GithubRepositories source={repositoryData}/>
      </div>
    )
  } else if (error) {
    return (
      <div className="mx-5 p-5 text-center font-bold text-red-700">
        <FontAwesomeIcon icon={faExclamation} className="mr-3"/>
        Something went wrong, please try again later.
      </div>
    )
  } else {
    return (
      <div className="mx-5 p-5 text-center">
        <FontAwesomeIcon icon={faCog} spin={true} className="mr-3"/>
        Fetching repositories...
      </div>
    )
  }
}

export default GitHubProfile