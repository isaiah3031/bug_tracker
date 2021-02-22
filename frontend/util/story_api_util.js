export const fetchStories = (projectId) => 
  $.ajax({
    type: 'GET',
    url: `project/${projectId}/stories`
  })

export const fetchStory = (projectId, storyId) =>
  $.ajax({
    type: 'GET',
    url: `/project/${projectId}/stories/${storyId}`
  })

export const createStory = (story) => 
  $.ajax({
    type: 'POST',
    url: `project/${story.project_id}/stories`,
    data: {story: story}
  })

export const editStory = (story) =>
  $.ajax({
    type: 'GET',
    url: `/project/${story.project_id}/stories/${story.id}/edit`,
    data: {story: story}
  })

export const deleteStory = (story) =>
  $.ajax({
    type: 'DELETE',
    url: `/project/${story.project_id}/stories/${story.id}`
  })