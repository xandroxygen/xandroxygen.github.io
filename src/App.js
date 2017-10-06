import React, { Component } from "react"
import Header from "./components/Header/Header"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Xander" subtitle="Moffatt" />
        <p className="App-intro">This is a work in progress!</p>
      </div>
    )
  }
}

export default App
