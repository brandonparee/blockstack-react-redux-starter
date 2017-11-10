import React from 'react'
import { getBlockstackFile, putBlockstackFile } from '../../actions/fileActions'
import { connect } from 'react-redux'

const mapStateToProps = ({file, user}) => {
  return {
    file,
    user
  }
}

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    getFile: (path, decrypt) => {
      console.log(path)
      dispatch(getBlockstackFile(path, decrypt))
    },
    putFile: (path, content, encrypt) => {
      dispatch(putBlockstackFile(path, content, encrypt))
    }
  }
}

const Secret = ({user, file, getFile, putFile, ...rest}) => {
  return (
    <div>
      <h2>Super Secret!</h2>
      <p>This route is only accessible while logged in!</p>
      <button className='button' onClick={() => putFile('test.txt', 'Lorem ipsum', true)}>Put Encrypted File</button>
      <br />
      <button className='button' onClick={() => putFile('test.txt', 'Lorem ipsum')}>Put Unencrypted File</button>
      <br />
      <button className='button' onClick={() => getFile('test.txt')}>Get File</button>
      <br />
      <button className='button' onClick={() => getFile('test.txt', true)}>Get File and Decrypt</button>
      {
        file.content ? <p>File Contents: {file.content}</p> : null
      }
    </div>
  )
}

const SecretContainer = connect(mapStateToProps, mapDispatchToProps)(Secret)

export default SecretContainer
