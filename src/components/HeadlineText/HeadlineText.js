import React, { Component } from "react"
import "./HeadlineText.css"

class HeadlineText extends Component {
  render() {
    const { children } = this.props
    return <p className="headline-text">{children}</p>
  }
}

export default HeadlineText
