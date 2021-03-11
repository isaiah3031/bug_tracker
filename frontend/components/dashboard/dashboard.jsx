import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AssignedStoriesContainer from './assigned_stories_container'
import ProjectListContainer from '../projects/project_list_container'

const Dashboard = ({ }) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return <div className='dashboard'>
    {!isMobile && <ProjectListContainer />}
    <AssignedStoriesContainer />
  </div>
}

export default Dashboard