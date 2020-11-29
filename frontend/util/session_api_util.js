export const signup = (username, password) => (
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: { user: { username: username, password: password } }
  })
)