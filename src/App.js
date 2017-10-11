import React, { Component } from "react"
import Header from "./components/Header/Header"
import "./App.css"

class App extends Component {
  render() {
    const headerInfo = [
      "xander.moffatt@gmail.com",
      ["github.com/xandroxygen", "linkedin.com/in/xander-moffatt"],
    ]
    return (
      <div className="app-container">
        <Header title="Xander" subtitle="Moffatt" info={headerInfo} />
        <p className="app-tag">
          I'm a full-stack software engineer that's built microservices,
          websites, and apps, and I enjoy making things work together.
        </p>
      </div>
    )
  }
}

export default App
