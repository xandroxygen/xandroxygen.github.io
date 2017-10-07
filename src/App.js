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
        <p className="app-intro">
          This is a work in progress! I am a CS student at Brigham Young
          University, minoring in Music. I'm currently volunteering abroad with
          my wife! We are teaching English in Russia for the Fall 2017 semester.
          More things about me and I never know what to say...
        </p>
      </div>
    )
  }
}

export default App
