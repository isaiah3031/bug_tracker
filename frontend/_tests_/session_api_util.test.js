import * as SessionAPI from '../util/session_api_util';
const faker = require('faker')

test("SessionAPI's signup function returns the user on success", () => {
  let username = faker.name.findName()
  return SessionAPI.signup(username, 'password').then(data => expect('data').toEqual('mark'))
})