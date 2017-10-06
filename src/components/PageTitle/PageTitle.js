import React, { Component } from "react"
import "./PageTitle.css"

class PageTitle extends Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <div className="page-title">
        <h1>{title.toUpperCase()}</h1>
        <h2>{subtitle.toUpperCase()}</h2>
      </div>
    )
  }
}

export default PageTitle
