import { connect } from 'react-redux'
import ProjectForm from './project_form'
import { createProject } from '../../actions/project_actions'

const mapStateToProps = state => ({
  formType: 'New Project'
})

const mapDispatchToProps = dispatch => ({
  processForm: project => dispatch(createProject(project))
})

const NewProjectFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm)

export default NewProjectFormContainer