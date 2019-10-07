import React from "react"
import Axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import GitHubRepository from "./github-repository"

export default class GithubRepositories extends React.Component {
  endpoint = "https://api.github.com/users/thanosparavantis/repos"

  constructor(props) {
    super(props)

    this.state = {
      data: undefined,
    }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    Axios.get(this.endpoint).then(response => {
      this.setState({
        data: response.data,
      })
    }).catch(error => {

    })
  }

  render() {
    if (this.state.data) {
      return <div>
        {this.state.data.map((repo, index) => <GitHubRepository source={repo} key={index}/>)}
      </div>
    } else {
      return <div>
        <FontAwesomeIcon icon={faSpinner} spin/>
      </div>
    }
  }
}
