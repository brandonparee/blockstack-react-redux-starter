import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { userReducer } from './reducers/userReducer'
import { fetchUserData } from './actions/userActions'
import { fileReducer } from './reducers/fileReducer'
import './index.css'
import 'bulma/css/bulma.css'
import App from './layouts/App'
import registerServiceWorker from './registerServiceWorker'

// Setup for react-router
const history = createHistory()
const middleware = routerMiddleware(history)

// Setup for redux
const store = createStore(
  combineReducers({
    file: fileReducer,
    user: userReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware, createLogger(), thunkMiddleware)
)

store.dispatch(fetchUserData())

// Initialize React application
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
