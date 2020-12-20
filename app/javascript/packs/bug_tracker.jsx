import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '../../../frontend/store/store'
import Root from '../../../frontend/components/root'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root)
})