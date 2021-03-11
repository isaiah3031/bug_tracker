import React from 'react'
import AssignedStoriesContainer from './assigned_stories_container'
import ProjectListContainer from '../projects/project_list_container'

const Dashboard = ({ }) => {
  return <div className='dashboard'>
    <ProjectListContainer />
    <AssignedStoriesContainer />
  </div>
}

export default Dashboard