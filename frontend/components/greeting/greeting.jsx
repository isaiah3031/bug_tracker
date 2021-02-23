import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import BugIcon from 'images/bug_icon.png'
import UserIcon from 'images/user_icon.png'
import ArrowIcon from 'images/arrow_icon.png'

const Greeting = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  if (props.currentUser.username !== undefined){
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>
          <img src={BugIcon} alt=''/>
          <h1>Bug Hunter</h1>
        </Link>      
        <div className='user-info'>
          <h1>Welcome {props.currentUser.username}</h1>
          <div onClick={toggleHover} 
            onMouseEnter={toggleHover}
            onMouseLeave={hovered ? toggleHover : null}>
            <img src={ArrowIcon} alt=''/>
            <img src={UserIcon} alt=''/>
            <div className={hovered ? 'session-options' : 'hidden'}>
              <a onClick={() => props.logout()}>Logout</a>  
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>
          <img src={BugIcon} alt=''/>
          <h1>Bug Hunter</h1>
        </Link>
      <div onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}>
          <img src={ArrowIcon} alt=''/>
          <img src={UserIcon} alt=''/>

        <div className={hovered ? 'session-options' : 'hidden'}>
          <Link to='/signup'>
            <a>Sign up</a>
          </Link>
          <Link to='/login'>
            <a>Login</a>
          </Link>
        </div>

      </div>
    </div>
  )}
}

export default Greeting;