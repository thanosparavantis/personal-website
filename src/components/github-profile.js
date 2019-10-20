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
    this.cancelSource = Axios.CancelToken.source()
    const cancelToken = this.cancelSource.token

    Axios.all([
      this.getIdentityData(cancelToken),
      this.getRepositoryData(cancelToken),
    ])
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

  componentWillUnmount() {
    this.cancelSource.cancel()
  }

  getIdentityData(cancelToken) {
    return Axios.get(
      "https://api.github.com/users/thanosparavantis",
      { cancelToken: cancelToken },
    )
  }

  getRepositoryData(cancelToken) {
    return Axios.get(
      "https://api.github.com/users/thanosparavantis/repos",
      { cancelToken: cancelToken },
    )
  }

  render() {
    if (this.state.loading) {
      return <div className="mx-5 p-5 bg-gray-300 text-center">
        <FontAwesomeIcon icon={faSpinner} spin className="mr-2"/>
        Loading data from GitHub
      </div>
    } else if (this.state.error) {
      return <div className="mx-5 p-5 bg-gray-300 text-center font-bold text-red-700">
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
