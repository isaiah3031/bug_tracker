import { fetchProjects } from '../../actions/project_actions'
import { connect } from 'react-redux'
import ProjectList from './project_list'

const mapStateToProps = state => ({
  projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

const ProjectListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default ProjectListContainer