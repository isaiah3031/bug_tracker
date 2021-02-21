import React from 'react'
import ReactDOM from 'react-dom'
import { store } from '../../../frontend/store/store'
import Root from '../../../frontend/components/root'

// You need to make the logout function publicly availible because of the
// heroku loop 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
})