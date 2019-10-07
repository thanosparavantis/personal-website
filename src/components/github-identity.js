import React from "react"
import Axios from "axios"
import { faSpinner, faUsers, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class GithubIdentity extends React.Component {
  endpoint = "https://api.github.com/users/thanosparavantis"

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
      return <a href={this.state.data.html_url} className="flex flex-col">
        <div className="p-4 rounded-t text-white bg-gray-700 font-bold text-sm">
          GitHub Profile
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-6 bg-gray-300 hover:bg-gray-400">
          <h1 className="text-xl font-bold text-gray-800">{this.state.data.name}</h1>
          <p className="text-sm font-bold uppercase text-gray-700">{this.state.data.company}</p>
          <p className="my-3 text-gray-700 font-bold">
            <FontAwesomeIcon icon={faUsers} className="mr-2"/>
            {this.state.data.followers} followers
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{this.state.data.bio}</p>
        </div>
      </a>
    } else {
      return <div>
        <FontAwesomeIcon icon={faSpinner} spin/>
      </div>
    }
  }
}
