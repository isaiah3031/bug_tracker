import React from 'react'
import ReactDOM from 'react-dom'

import { signup, login, logout } from '../../../frontend/util/session_api_util'
window.signup = signup;
window.login = login;
window.logout = logout

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<h1>BugTracker</h1>, root)
})