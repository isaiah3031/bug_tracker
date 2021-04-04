import React from 'react'
import { Link } from 'react-router-dom'
import BugIcon from '../../../app/assets/images/bug_icon.png'

const Greeting = ({ currentUser, logout }) => {
  return (
    <>
      <Link className='icon' to='/'>
        <h1>.bugHunt</h1>
      </Link>
      <div className={`user-info`}>
        {currentUser.username ?
          <a onClick={() => logout()}>Logout</a> :
          <Link to='/signup'>Sign up</Link>
        }
      </div>
    </>
  )

}

export default Greeting;