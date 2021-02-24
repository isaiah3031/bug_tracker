import React from 'react'
import Bug from '../../app/assets/images/bug_icon.png'
const LoadingIcon = () => {
  return (
    <div className="lds-circle"><img src={Bug}/></div>
  )
}

export default LoadingIcon;