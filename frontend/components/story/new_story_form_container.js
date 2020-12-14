import { connect } from 'react-redux'
import StoryForm from './story_form'
import { createStory } from '../../actions/stories_actions'

const mapStateToProps = state => ({
  formType: 'new'
})

const mapDispatchToProps = state => ({
  processForm: (story) => dispatchEvent(createStory(story.projectId, story))
})

const NewStoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)

export default NewStoryFormContainer;