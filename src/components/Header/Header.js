import React, { Component } from "react"
import "./Header.css"

import PageTitle from "../PageTitle/PageTitle"

class Header extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <header className="App-header">
        <PageTitle title={title} subtitle={subtitle} />
        <div className="App-header-divider" />
      </header>
    )
  }
}

export default Header
