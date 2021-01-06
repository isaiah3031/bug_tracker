import { connect } from 'react-redux'
import { fetchProject } from '../../actions/project_actions'
import ProjectDetail from './project_detail'

const mapStateToProps = state => ({
  project: state.entities.projects,
  loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId))
})

const ProjectDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail)

export default ProjectDetailContainer