import SessionReducer from '../../reducers/session_reducer'
import * as types from '../../constants/action_types'

// describe('session reducer', () => {
//   it('should return the initial state when passed an unfamiliar type', () => {
//     expect(SessionReducer({}, { type: undefined })).toEqual({})
//   })

//   it('should handle RECEIVE_CURRENT_USER', () => {
//     expect(SessionReducer({}, { 
//         type: types.RECEIVE_CURRENT_USER,
//         user: { 1: { username: 'isaiah30' } }
//       }
//     )).toEqual({ 1: {username: 'isaiah30' } })
//   })

//   it('should handle LOGOUT_CURRENT_USER', () => {
//     expect(SessionReducer({ 17: { username: 'isaiah30' } }, {
//       type: types.LOGOUT_CURRENT_USER
//     })).toEqual({})
//   })
// })