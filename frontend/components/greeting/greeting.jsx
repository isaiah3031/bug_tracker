import React from 'react'
import { Link } from 'react-router-dom'
import BugIcon from '../../../app/assets/images/bug_icon.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Greeting = ({ currentUser, logout }) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Link className='icon' to='/'>
        <h1>.bugHunt</h1>
      </Link>
      <div className={`user-info`}>
        {!isMobile && currentUser.username && <h2>Welcome {currentUser.username}</h2>}
        {currentUser.username ?
          <Link to='/signup'>Sign up</Link> :
          <a onClick={() => logout()}>Logout</a>
        }
      </div>
    </>
  )

}

export default Greeting;