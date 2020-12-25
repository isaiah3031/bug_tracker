import React from 'react';
import NewStoryFormContainer from './new_story_form_container'

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
      <div>
        <button onClick={() => this.toggleNewForm()}>
          {this.state.newForm ? 'X' : ''}
        </button>
        <div className={this.state.newForm ? 'popup-background' : 'hidden'}>
          <NewStoryFormContainer projectId={projectId}/>
        </div>
      </div>
    )
  }
}

export default ToggleNewForm;