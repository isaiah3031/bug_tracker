export const signup = user => {
  debugger
  return $.ajax({
    type: 'POST',
    url: '/api/users',
    data: { user: user }
  })
}

export const login = user => (
  $.ajax({
    type: 'POST', 
    url: '/api/sessions',
    data: { user: user }
  })
)

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: '/api/sessions'
  })
)