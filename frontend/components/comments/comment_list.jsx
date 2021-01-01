import React from 'react'
import { withRouter } from 'react-router-dom'

class CommentList extends React.Component {
  componentWillMount() {
    this.props.fetchComments(this.props.story)
  }
  
  render() {
    let comments = this.props.comments
    
    return (
      <ul>
        {Object.values(comments).reverse().map(comment =>{
          return <div>
            {comment.is_reject ? 'REJECT' : ''}
            <li>{comment.text}</li>
          </div>
          }
        )}
      </ul>
    )
  }
}

export default withRouter(CommentList)