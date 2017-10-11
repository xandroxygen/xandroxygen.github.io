import React, { Component } from "react"
import "./Header.css"

import PageTitle from "../PageTitle/PageTitle"

class Header extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <header className="app-header">
        <PageTitle title={title} subtitle={subtitle} />
        <div className="app-header--divider" />
      </header>
    )
  }
}

export default Header
