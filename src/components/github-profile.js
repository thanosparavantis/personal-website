import React from "react"
import GithubIdentity from "./github-identity"
import GithubRepositories from "./github-repositories"
import Axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default class GithubProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      identityData: undefined,
      repositoryData: undefined,
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    Axios.all([this.getIdentityData(), this.getRepositoryData()])
      .then(Axios.spread((identityResponse, repositoryResponse) => {
        this.setState({
          identityData: identityResponse.data,
          repositoryData: repositoryResponse.data,
          loading: false,
        })
      }))
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
        })
      })
  }

  getIdentityData() {
    return Axios.get("https://api.github.com/users/thanosparavantis")
  }

  getRepositoryData() {
    return Axios.get("https://api.github.com/users/thanosparavantis/repos")
  }

  render() {
    if (this.state.loading) {
      return <div className="p-5 bg-gray-300 text-center">
        <FontAwesomeIcon icon={faSpinner} spin className="mr-2"/>
        Loading data from GitHub
      </div>
    } else if (this.state.error) {
      return <div className="p-5 bg-gray-300 text-center font-bold text-red-700">
        Something went wrong, please try again later.
      </div>
    } else {
      return <div>
        <GithubIdentity source={this.state.identityData}/>
        <GithubRepositories source={this.state.repositoryData}/>
      </div>
    }
  }
}
