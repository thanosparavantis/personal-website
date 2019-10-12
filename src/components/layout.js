import React from "react"
import Navbar from "../components/navbar"
import { isMobile } from "is-mobile"
import Page from "react-page-loading"
import SeoHeaders from "./seo-headers"

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
    return <div>
      <SeoHeaders/>
      <Page loader="spin" color={"#A9A9A9"} size={4}>
        <Navbar onToggleClick={this.navbarToggleClickHandler} onLinkClick={this.navbarLinkClickHandler} isOpened={this.state.navbarOpened}/>
        {this.props.children}
      </Page>
    </div>
  }
}
