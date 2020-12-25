import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
const Greeting = (props) => {
  if (props.currentUser.username !== undefined){
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>BugTracker</Link>
        <h1>Welcome {props.currentUser.username}
          <button onClick={() => props.logout()}>Logout</button>          
        </h1>
      </div>
    )
  } else {
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>BugTracker</Link>
      <div>
        <Link to='/signup'>
        <button>Sign up</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  )}
}

export default Greeting;