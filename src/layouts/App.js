import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Authenticated from '../components/Authenticated/Authenticated'
import Public from '../components/Public/Public'

import HandleLogin from '../pages/Login/HandleLogin'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'
import Secret from '../pages/Secret/Secret'

class App extends Component {
  render () {
    return (
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/logout' exact component={Logout} />
        <Public path='/login' name='login' component={Login} />
        <Public path='/handle-login' name='handle-login' component={HandleLogin} />
        <Authenticated path='/authenticated-route' name='authenticated-route' component={Secret} />
      </main>
    )
  }
}

export default App
