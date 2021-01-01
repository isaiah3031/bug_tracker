export const fetchComments = (story) => 
  $.ajax({
    type: 'GET',
    url: `project/${story.project_id}/stories/${story.id}/comments`
  })

export const fetchComment = (story, comment_id) => 
  $.ajax({
    type: 'GET',
    url: `project/${story.project_id}/stories/${story.id}/comments/${comment_id}`
  })

export const createComment = (story, comment) => 
  $.ajax({
    type: 'POST',
    url: `project/${story.project_id}/stories/${story.id}/comments`,
    data: { comment: comment }
  })

export const editComment = (project_id, comment) =>
  $.ajax({
    type: 'GET',
    url: `project/${project_id}/stories/${comment.story_id}/comments/${comment.id}/edit`,
    data: { comment: comment }
  })