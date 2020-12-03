import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../../../frontend/store/store'
import { signup, login, logout } from '../../../frontend/actions/session_actions'
window.signup = signup;
window.login = login;
window.logout = logout

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
// when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>BugTracker</h1>, root)
})