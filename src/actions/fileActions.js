import * as blockstack from 'blockstack'

export const FETCH_FILE_REQUEST = 'FETCH_FILE_REQUEST'
export const FETCH_FILE_SUCCESS = 'FETCH_FILE_SUCCESS'
export const FETCH_FILE_ERROR = 'FETCH_FILE_ERROR'
export const PUT_FILE_REQUEST = 'PUT_FILE_REQUEST'
export const PUT_FILE_SUCCESS = 'PUT_FILE_SUCCESS'
export const PUT_FILE_ERROR = 'PUT_FILE_ERROR'

export const getBlockstackFile = ({ context = '', decrypt, path = '' }) => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_FILE_REQUEST })

    if (context === 'editor') {
      path = getState().editor.path
    }

    return blockstack.getFile(path, decrypt)
      .then(
        res => dispatch({
          type: FETCH_FILE_SUCCESS,
          payload: {
            isEncrypted: decrypt,
            content: res,
            path
          }
        }),

        error => dispatch({ type: FETCH_FILE_ERROR, payload: error })
      )
  }
}

export const putBlockstackFile = ({ context = '', encrypt, content, path }) => {
  return (dispatch, getState) => {
    dispatch({ type: PUT_FILE_REQUEST })

    if (context === 'editor') {
      path = getState().editor.path
      content = getState().editor.content
    }

    return blockstack.putFile(path, content, encrypt)
      .then(
        res => dispatch({
          type: PUT_FILE_SUCCESS,
          payload: {
            isEncrypted: encrypt,
            content,
            path
          }
        }),

        error => dispatch({ type: PUT_FILE_ERROR, payload: error })
      )
  }
}
