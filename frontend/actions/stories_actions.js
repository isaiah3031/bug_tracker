import * as types from '../constants/action_types'
import * as StoryAPI from '../util/story_api_util'

export const receiveStories = (stories) => ({
  type: types.RECEIVE_STORIES,
  stories
})

export const receiveStory = (story) => ({
  type: types.RECEIVE_STORY,
  story
})

export const startLoading = () => ({
  type: types.START_LOADING
})

export const fetchStories = (projectId) => dispatch => {
  dispatch(startLoading())
  return StoryAPI.fetchStories(projectId).then(stories =>
    dispatch(receiveStories(stories))
  )
}

export const fetchStory = (projectId, storyId) => dispatch => {
  dispatch(startLoading())
  return StoryAPI.fetchStory(projectId, storyId).then(story =>
    dispatch(receiveStory(story))
  )
}

export const createStory = (story) => dispatch =>{
  dispatch(startLoading())
  return StoryAPI.createStory(story).then(story => 
      dispatch(receiveStory(story))
  )
}

export const editStory = (story) => dispatch => {
  dispatch(startLoading())
  return StoryAPI.editStory(story).then(story => 
    dispatch(receiveStory(story))
  )
}