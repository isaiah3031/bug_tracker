import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '../../../frontend/store/store'
import Root from '../../../frontend/components/root'
import {logout} from '../../../frontend/actions/session_actions'
window.logout = logout()
// You need to make the logout function publicly availible because of the
// heroku loop 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root)
})