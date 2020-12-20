import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../store/store'
import { Provider } from 'react-redux'
import { HashRouter } from "react-router-dom"
import App from './app'

const Root = ({ store }) => (
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
)

export default Root;