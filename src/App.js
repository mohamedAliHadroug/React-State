import React, {Component} from 'react'
import './App.css'
import Person from './Person.js'
import Clock from './Clock'

class App extends Component {


  render() {

    return (
      <div className="App">
       <Person />
       <Clock />
      </div>
    )

  }

}

export default App
