import React, { Component } from "react"
import "./PageInfo.css"

class PageInfo extends Component {
  render() {
    const { info = [[]] } = this.props
    const links = info.pop()
    return (
      <div className="page-info">
        {info.map(item => <div className={"page-info--item"}>{item}</div>)}
        {links.map(item => (
          <a href={`http://${item}`} className={"page-info--item"}>
            {item}
          </a>
        ))}
      </div>
    )
  }
}

export default PageInfo
