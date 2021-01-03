import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      is_reject: false,
      story_id: props.story.id,
      author_id: this.props.currentUser.id
    }
  }

  handleChanges() {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  handleSubmit() {
    event.preventDefault()
    this.props.processForm(this.props.story, this.state).then(() => {
      this.props.fetchComments(this.props.story)
    })
  }

  render() {
    return (
      <form className='comment-form'>
        <label>Leave a Comment</label>
        <textarea 
          id='text'
          onChange={() => this.handleChanges()}>
        </textarea>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    )
  }
}

export default CommentForm