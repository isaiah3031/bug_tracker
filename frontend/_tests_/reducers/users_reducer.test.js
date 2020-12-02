import UsersReducer from '../../reducers/users_reducer'
import * as types from '../../constants/action_types'

describe('Users Reducer', () => {
  it('should return the initial state', () => {
    expect(UsersReducer({}, {})).toEqual({});
  })

  it('should handle RECEIVE_CURRENT_USER', () => {
    const user = { 1: { username: 'isaiah30' } }
    expect(UsersReducer({}, {
      type: types.RECEIVE_CURRENT_USER,
      user: user
    })).toEqual(user)
  })
})