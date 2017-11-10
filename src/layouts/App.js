import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Authenticated from '../components/Authenticated/Authenticated'
import Public from '../components/Public/Public'
import Sidebar from '../components/Sidebar/Sidebar'

import HandleLogin from '../pages/Login/HandleLogin'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'
import Secret from '../pages/Secret/Secret'

const mapStateToProps = (state) => {
  return state
}

const App = ({user, ...rest}) => {
  return (
    <main>
      <div className='columns is-gapless'>
        <div className='column is-one-quarter'>
          <Sidebar />
        </div>
        <div className='column'>
          {
            (user.isAuthenticated)
            ? <Authenticated path='/' exact name='home' component={Secret} />
            : <Public path='/' exact name='home' component={Home} />
          }
          <Route path='/logout' exact component={Logout} />
          <Public path='/login' exact name='login' component={Login} />
          <Public path='/handle-login' name='handle-login' component={HandleLogin} />
        </div>
      </div>
    </main>
  )
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
