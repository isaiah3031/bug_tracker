import StoryReducer from '../../reducers/story_reducer'
import * as types from '../../constants/action_types'

describe('story reducer', () => {
  it ('should return the initial state when passed an unfamiliar type', () => {
    expect(StoryReducer({}, { type: undefined })).toEqual({})
  })

  it('should handle RECEIVE_STORIES', () => {
    let stories = {
      1 : { story: 'number one' },
      2 : { story: 'number two' }
    }
    expect(StoryReducer({}, {
      type: types.RECEIVE_STORIES,
      stories: stories
    })).toEqual(stories)
  })

  it('should handle RECEIVE_STORY', () => {
    let story = { story: 'storystory'}
    expect(StoryReducer({}, {
      type: types.RECEIVE_STORY,
      story: story
    })).toEqual(story)
  })
})