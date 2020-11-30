export const signup = (username, password) => (
  $.ajax({
    type: 'POST',
    url: '/api/users/',
    data: { user: { username: username, password: password } }
  })
)

export const login = (username, password) => (
  $.ajax({
    type: 'POST', 
    url: '/api/sessions/',
    data: { user: { username: username, password: password } }
  })
)

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: '/api/sessions/'
  })
)