import { connect } from 'react-redux'
import ProjectForm from './project_form'
import { editProject, fetchProject } from '../../actions/project_actions'
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  formType: 'Edit Project',
  projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
  processForm: (project, projectId) => dispatch(editProject(project, projectId)),
  fetchProject: (projectId) => dispatch(fetchProject(projectId))
})

const EditProjectFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm)

export default withRouter(EditProjectFormContainer)