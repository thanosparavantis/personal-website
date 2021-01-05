import React from "react"
import Navbar from "../components/navbar"
import { isMobile } from "is-mobile"
import { Helmet } from "react-helmet"
import "@fortawesome/fontawesome-svg-core/styles.css"

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
        <div className="md:ml-56">
          {this.props.children}
        </div>
      </div>
    )
  }
}
