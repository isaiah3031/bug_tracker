export const fetchComments = (project_id, story_id) => 
  $.ajax({
    type: 'GET',
    url: `project/${project_id}/stories/${story_id}/comments`
  })

export const fetchComment = (project_id, story_id, comment_id) => 
  $.ajax({
    type: 'GET',
    url: `project/${project_id}/stories/${story_id}/comments/${comment_id}`
  })

export const createComment = (project_id, story_id, comment) => 
  $.ajax({
    type: 'POST',
    url: `project/${project_id}/stories/${story_id}/comments`,
    data: { comment: comment }
  })

export const editComment = (project_id, story_id, comment_id, comment) =>
  $.ajax({
    type: 'GET',
    url: `project/${project_id}/stories/${story_id}/comments/${comment_id}/edit`,
    data: { comment: comment }
  })