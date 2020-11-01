import React from "react"
import Navbar from "../components/navbar"
import { isMobile } from "is-mobile"
import { Helmet } from "react-helmet"

export default class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarOpened: false,
    }

    this.navbarToggleClickHandler = this.navbarToggleClickHandler.bind(this)
    this.navbarLinkClickHandler = this.navbarLinkClickHandler.bind(this)
  }

  navbarToggleClickHandler(event) {
    this.setState((state, props) => ({
      navbarOpened: !state.navbarOpened,
    }))
  }

  navbarLinkClickHandler() {
    if (isMobile()) {
      this.setState({ navbarOpened: false })
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <body className="font-custom" />
        </Helmet>
        <Navbar onToggleClick={this.navbarToggleClickHandler}
                onLinkClick={this.navbarLinkClickHandler}
                isOpened={this.state.navbarOpened} />
        {this.props.children}
      </div>
    )
  }
}
