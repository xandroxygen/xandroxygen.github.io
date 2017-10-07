import React, { Component } from "react"
import "./Header.css"

import PageTitle from "../PageTitle/PageTitle"
import PageInfo from "../PageInfo/PageInfo"

class Header extends Component {
  render() {
    const { title, subtitle, info } = this.props
    return (
      <header className="app-header">
        <PageTitle title={title} subtitle={subtitle} />
        <PageInfo info={info} />
        <div className="app-header--divider" />
      </header>
    )
  }
}

export default Header
