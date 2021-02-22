import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'

const CommentList = ({story, deleteComment, fetchComments, comments}) => {
  useEffect(() => {
    fetchComments(story)
  }, [])
  
    
  return (
    <ul>
      {Object.values(comments).reverse().map(comment =>{
        return <div>
          <button onClick={() => deleteComment(story, comment)}>delete</button>
          {comment.is_reject ? 'REJECT' : ''}
          <li>{comment.text}</li>
        </div>
        }
      )}
    </ul>
  )
  
}

export default withRouter(CommentList)