import React, { Component } from "react"
import "./Header.css"

import PageTitle from "../PageTitle/PageTitle"

class Header extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <header className="app-header">
        <div className="app-header--content">
          <PageTitle title={title} subtitle={subtitle} />
          <div>385 290 7346</div>
        </div>
        <div className="app-header--divider" />
      </header>
    )
  }
}

export default Header
