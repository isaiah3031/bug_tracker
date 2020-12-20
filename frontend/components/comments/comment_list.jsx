import React from 'react'
import { withRouter } from 'react-router-dom'

class CommentList extends React.Component {
  componentWillMount() {
    let projectId = this.props.match.params.projectId
    this.props.fetchComments(projectId, this.props.storyId)
  }
  
  render() {
    let comments = this.props.comments
    return (
      <ul>
        {Object.values(comments).map(comment =>{
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