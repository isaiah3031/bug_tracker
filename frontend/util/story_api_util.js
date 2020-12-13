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

export const createStory = (projectId, story) => 
  $.ajax({
    type: 'POST',
    url: `project/${projectId}/stories`,
    data: story
  })

export const editStory = (projectId, storyId, story) =>
  $.ajax({
    type: 'GET',
    url: `/project/${projectId}/stories/${storyId}/edit`,
    data: story
  })