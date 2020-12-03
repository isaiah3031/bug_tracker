import SessionErrorsReducer from '../../reducers/session_errors_reducer'
import * as types from '../../constants/action_types'

describe('SessionErrorsReducer', () => {
  it('Returns the initial state if passed an unknown type', () => {
    expect(SessionErrorsReducer({}, {})).toEqual({})
  })

  it('handles RECEIVE_SESSION_ERRORS', () => {
    expect(SessionErrorsReducer({}, {
      type: types.RECEIVE_SESSION_ERRORS,
      errors: 'Invalid Login Credentials'
    })).toEqual('Invalid Login Credentials')
  })

  it('handles RECEIVE_CURRENT_USER', () => {
    expect(SessionErrorsReducer({ error: 'invalid credentials'}, {
      type: types.RECEIVE_CURRENT_USER
    })).toEqual({})
  })
})