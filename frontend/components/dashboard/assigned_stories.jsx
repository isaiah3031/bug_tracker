import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const AssignedStories = ({ currentUser }) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  if (!currentUser || !currentUser.assigned_stories) return <h2>No assigned tasks</h2>
  const incompleteStories = []
  const finishedStories = []

  Object.values(currentUser.assigned_stories).map(story => story.iteration == 'current' ?
    incompleteStories.push(story) : finishedStories.push(story))

  return <div className='dashboard-task-list'>
    <section className='dashboard-header'>
      <h2>Projects</h2>
      {!isMobile && currentUser.username && <h2>Welcome {currentUser.username}</h2>}
    </section>

    <section className='task-list-group'>
      <ul className='task-list'>
        <h2>TodoList</h2>
        {
          incompleteStories.length == 0 ?
            <p>No tasks in progress</p> :
            incompleteStories.map(story => (
              <li
                className='item'
                key={story.id}>
                {story.description}
              </li>)
            )}
      </ul>

      <ul className='task-list'>
        <h2>Finished</h2>
        {finishedStories.length == 0 ?
          <p>No finshed tasks</p> :
          finishedStories.map(story => (
            <li
              className='item'
              key={story.id} >
              { story.description}
            </li>)
          )}
      </ul>
    </section>
  </div >
}

export default AssignedStories