import React from 'react'
import { connect } from 'react-redux'
import { loginWithBlockstack } from '../../actions/userActions'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(loginWithBlockstack())
    }
  }
}

const Login = ({user, onClick, ...rest}) => {
  return (
    <div className='Login'>
      <h2>Login with Blockstack</h2>
      <button onClick={onClick}>Log In</button>
    </div>
  )
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
