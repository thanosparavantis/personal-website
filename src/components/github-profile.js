import React, { useEffect, useState } from "react"
import GithubIdentity from "./github-identity"
import GithubRepositories from "./github-repositories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamation, faExclamationCircle, faSpinner } from "@fortawesome/free-solid-svg-icons"

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
    return (
      <div className="bg-gray-200 shadow rounded p-5 text-center font-bold text-red-700">
        <FontAwesomeIcon icon={faExclamationCircle} className="mr-3" />
        Something went wrong, please try again later.
      </div>
    )
  } else if (identityData && repositoryData) {
    return (
      <>
        <GithubIdentity source={identityData} />
        <GithubRepositories source={repositoryData} />
      </>
    )
  } else {
    return (
      <div className="bg-gray-200 shadow rounded p-5 text-center font-bold">
        <FontAwesomeIcon icon={faSpinner} spin={true} className="mr-3" />
        Loading...
      </div>
    )
  }
}

export default GitHubProfile