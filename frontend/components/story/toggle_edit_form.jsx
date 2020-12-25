import React from 'react'

class ToggleEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }

  toggleForm() {
    this.setState((state) => ({editForm: !state.editForm}))
  }

  render() {
    if (this.state.editForm) {
      return (
        <div>
          <button onClick={() => this.toggleForm()}>
            {this.state.editForm ? 'View Details' : 'Edit'}
          </button>
          <EditStoryFormContainer story={this.props.story}/>
        </div>
    )}
  }
}

export default ToggleEditForm;