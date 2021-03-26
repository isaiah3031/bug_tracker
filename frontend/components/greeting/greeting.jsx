import React from 'react'
import { Link } from 'react-router-dom'
import BugIcon from 'images/bug_icon.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Greeting = ({ currentUser, logout }) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <div className='greeting-container'>
      <Link className='icon' to='/'>
        <img src={BugIcon} alt='' />
        {!isMobile && <h1>Bug Hunter</h1>}
      </Link>
      <div className={`user-info`}>
        {!isMobile && currentUser.username && <h2>Welcome {currentUser.username}</h2>}
        {currentUser.username ?
          <a onClick={() => logout()}>Logout</a> :
          <Link to='/signup'>Sign up</Link>
        }
      </div>
    </div >
  )

}

export default Greeting;