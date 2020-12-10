import React from 'react'
import {Link} from 'react-router-dom'
class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.currentUser.username !== undefined){
      return (
        <div className='greeting-container'>
          <Link className='icon' to='/'>BugTracker</Link>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className='greeting-container'>
          <Link className='icon' to='/'>BugTracker</Link>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      )
    }
  }
}

export default Greeting;