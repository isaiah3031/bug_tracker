import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    } 

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setEmptyState() {
    this.setState({
      username: '',
      password: ''
    })
  }

  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit() {
    this.props.processForm(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  handleLinkTo() {
    if (this.props.formType === 'login'){
      return 'signup?';
    } else {
      return 'login?'
    }
  }

  handleErrors() {
    if (this.props.errors) {
      return Object.values(this.props.errors)
    } else {
      return []
    }
  }

  render() {
    return (
      <div className='session-page'>
        <div className='toggle-session'>
          <h1>Welcome To MovieApp</h1>
          <Link to={this.handleLinkTo()}>
            <button>{this.handleLinkTo()}</button>
          </Link>
        </div>
        <form className='form session-form' onSubmit={this.handleSubmit}>
 
          {this.handleErrors().map(error => <p>{error}</p>)}
          <h1>{this.props.formType === 'login' ? 'Sign In' : 'Create Account'}</h1>
            <input type='text'
              placeholder='Username'
              id='username' 
              onChange={(e) => this.handleInput(e)} 
              value={this.state.username} 
            />
            <input type='password' 
              placeholder='Password'
              id='password'
              onChange={(e) => this.handleInput(e)} 
              value={this.state.password} 
            />
            <button type="submit" onSubmit={() => this.handleSubmit()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SessionForm