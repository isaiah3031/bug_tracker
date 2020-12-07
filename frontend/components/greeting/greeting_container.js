import { connect } from 'react-redux'
import Greeting from './greeting'
import { login, logout, signup } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
})

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)

export default GreetingContainer