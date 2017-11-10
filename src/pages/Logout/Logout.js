import React from 'react'
import * as blockstack from 'blockstack'

const Logout = ({component, ...rest}) => {
  // Only attept `signUserOut` if logged in, since this route is accessible
  // when not logged in
  if (blockstack.isUserSignedIn()) {
    blockstack.signUserOut()
  }

  return (
    <h2>Signed Out</h2>
  )
}

export default Logout
