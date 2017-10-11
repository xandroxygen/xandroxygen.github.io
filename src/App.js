import React, { Component } from "react"
import Header from "./components/Header/Header"
import { HeadlineText } from "./components/Text/Text"
import "./App.css"

class App extends Component {
  render() {
    const headerInfo = [
      "xander.moffatt@gmail.com",
      ["github.com/xandroxygen", "linkedin.com/in/xander-moffatt"],
    ]
    return (
      <div className="app-container">
        <Header title="Xander" subtitle="Moffatt" />
        <HeadlineText>
          I'm a full-stack software engineer who builds microservices, websites,
          and apps, and I enjoy making things work together.
        </HeadlineText>
      </div>
    )
  }
}

export default App
