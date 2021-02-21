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

  toggleNewForm(e) {
    if ($(e.target).hasClass('plus-button') || $(e.target).hasClass('popup-background')) {
      this.setState({
        newForm: !this.state.newForm
      })
    }
  }

  formPlacement(iteration) { 
    if (iteration == 'icebox' || iteration == 'backlog') {
      return 'popup-container'
    } else {
      return 'popup-container left'
    }
  }
  
  render() {
    const { projectId, iteration } = this.props
    return (
      <>
        <a className='new-story-button' onClick={(e) => this.toggleNewForm(e)}>
          <img className='plus-button' src={PlusSign}/>
        </a>
        <div onClick={(e) => this.toggleNewForm(e)} 
          className={this.state.newForm ? 'popup-background' : 'hidden'}>
          <div className={this.formPlacement(iteration)}>
            <NewStoryFormContainer projectId={projectId} iteration={iteration}/>
          </div>
        </div>
      </>
    )
  }
}

export default ToggleNewForm;