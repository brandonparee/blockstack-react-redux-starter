import React from 'react'
import * as blockstack from 'blockstack'

const Secret = () => {
  console.log(blockstack.loadUserData())

  return (
    <div>
      <h2>Super Secret!</h2>
      <p>This route is only accessible while logged in!</p>
    </div>
  )
}

export default Secret
