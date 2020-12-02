import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import {
  login, 
  logout, 
  signup, 
  receiveCurrentUser, 
  logoutCurrentUser, 
  receiveErrors
} from '../../actions/session_actions'

import * as types from '../../constants/action_types'
import { config } from 'fetch-mock'

// Regular Actions

describe('regular actions', () => {
  const user = { 1: { id: 2, username: 'isaiah30' }}
  it('login action should create an action to log in a user', () => {
    const expectedAction = {
      type: types.RECEIVE_CURRENT_USER,
      user
    }
    expect(receiveCurrentUser(user)).toMatchObject(expectedAction)
  })

  it('signup action should create an action to create a user', () => {
    const expectedAction = {
      type: types.LOGOUT_CURRENT_USER,
    }
    expect(logoutCurrentUser()).toMatchObject(expectedAction)
  })

  it('error action should create an action to recieve errors', () => {
    const errors = { error: 'Incorrect Credentials.'}
    const expectedAction = {
      type: types.RECEIVE_ERRORS,
      errors
    }
    expect(receiveErrors(errors)).toMatchObject(expectedAction)
  })
})

// Thunk Actions

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

//   it('creates login user success when fetching user has been done', () => {
//     const user = { 1: { id: 1, username: 'isaiah30' } }

//     fetchMock.getOnce('/api/users', {
//       body: { user: { 1: {username: 'isaiah30'} } },
//       headers: { 'content-type': 'application/json' },
//       })

//     const expectedActions = [{ 
//       type: types.RECEIVE_CURRENT_USER, 
//       body: { user: user }
//     }]
//     const store = mockStore({ user: {} })
//     console.log(store.getActions())
//     return expect(fetchMock).toHaveFetched('/api/users', 'data')
//   })
// })

    