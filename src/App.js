import React, { Component } from "react"
import "./App.css"
import Contact from "../src/components/Contact"
import Header from "../src/components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Augustine Ogiza is a python and javascript developer" />
        <Contact
          name="Ogiza"
          language="Python and Javascript"
          email="gmail.com"
        />
        <h1>Today is a great day</h1>
      </div>
    )
  }
}

export default App
