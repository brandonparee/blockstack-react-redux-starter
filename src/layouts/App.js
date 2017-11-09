import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home/Home'

class App extends Component {
  render () {
    return (
      <main>
        <Route path='/' exact component={Home} />
      </main>
    )
  }
}

export default App
