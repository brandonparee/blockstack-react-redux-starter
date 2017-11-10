import React from 'react'
import * as blockstack from 'blockstack'

const Login = ({component, ...rest}) => {
  const loginWithBlockstack = () => {
    // Open the blockstack browser for sign in
    // After choosing an Id to sign in with, redirect back to the login page
    blockstack.redirectToSignIn(`${window.location.origin}/login`)
  }

  console.log(blockstack.isSignInPending())
  // Handle sign in from blockstack after redirect
  // Once sign in completes (promise is fulfilled), redirect to an authenticated only route
  if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn()
      .then((obj) => {
        window.location.replace(`${window.location.origin}/authenticated-route`)
      })
  }

  return (
    <div className='Login'>
      {
        (blockstack.isSignInPending() === false)
        ? <div>
          <h2>Login with Blockstack</h2>
          <button onClick={loginWithBlockstack}>Log In</button>
        </div>
        : <h2>Logging In...</h2>
      }
    </div>
  )
}

export default Login
