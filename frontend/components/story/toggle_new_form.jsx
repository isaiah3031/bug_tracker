import React from 'react';
import NewStoryFormContainer from './new_story_form_container'
import PlusSign from 'images/plus_sign.png'

class ToggleNewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      newForm: false
    })
  }

  toggleNewForm() {
    this.setState({
      newForm: !this.state.newForm
    })
  }
  
  render() {
    const { projectId } = this.props
    return (
      <>
        <a className='new-story-button' onClick={() => this.toggleNewForm()}>
          {this.state.newForm ? 'View Detsail' : <img src={PlusSign}/>}
        </a>
        <div className={this.state.newForm ? 'popup-background' : 'hidden'}>
          <div className='popup-container'>
            <NewStoryFormContainer projectId={projectId}/>
          </div>
        </div>
      </>
    )
  }
}

export default ToggleNewForm;