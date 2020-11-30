// const SessionAPI = require('../util/session_api_util');
const faker = require('faker')

const signup = jest.fn((username, password) => ({
    username: username,
    id: undefined
  })
);

test("SessionAPI's signup function returns the user on success", () => {
  expect(signup('isaiah30', 'password')).toBe('asdf')
})