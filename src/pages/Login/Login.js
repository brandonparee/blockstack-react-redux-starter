import React from 'react'
import { connect } from 'react-redux'
import { loginWithBlockstack } from '../../actions/userActions'
import * as blockstack from 'blockstack'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    onClick: () => {
      dispatch(loginWithBlockstack())
    }
  }
}

const Login = ({user, onClick, ...rest}) => {
  console.log(blockstack.loadUserData())
  return (
      <div className='Login'>
        <h2>Login with Blockstack</h2>
        <button onClick={onClick}>Log In</button>
    </div>
  )
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
