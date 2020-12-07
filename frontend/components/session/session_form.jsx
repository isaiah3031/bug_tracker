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

  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit() {
    this.props.processForm(this.state)
  }

  handleLinkTo() {
    if (this.props.formType == 'login'){
      return 'signup';
    } else {
      return 'login'
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
      <form>
        <Link to={this.handleLinkTo()}>{this.handleLinkTo()}</Link>
        {this.handleErrors().map(error => <p>{error}</p>)}
        <h2>{this.props.formType}</h2>
        <label>Username:
          <input type='text'
            id='username' 
            onChange={(e) => this.handleInput(e)} 
            value={this.state.username} 
          />
        </label>
        <label>Password:
          <input type='text' 
            id='password'
            onChange={(e) => this.handleInput(e)} 
            value={this.state.password} 
          />
        </label>
        <input type="button" onClick={() => this.handleSubmit()} text='Submit'/>
      </form>
    )
  }
}

export default SessionForm