import React from 'react'

const AssignedStories = ({ currentUser }) => {
  if (!currentUser || !currentUser.assigned_stories) return null
  const incompleteStories = []
  const finishedStories = []
  Object.values(currentUser.assigned_stories).map(story => story.iteration == 'current' ?
    incompleteStories.push(story) : finishedStories.push(story))

  return <div className='user-progress-components'>
    <ul className='vertical-table'>
      <h2>TodoList</h2>
      {
        incompleteStories.length == 0 ?
          <p>No tasks in progress</p> :
          incompleteStories.map(story => (
            <li
              className='vertical-table-item'
              key={story.id}>
              {story.description}
            </li>)
          )}
    </ul>

    <ul className='vertical-table'>
      <h2>Finished</h2>
      {finishedStories.length == 0 ?
        <p>No finshed tasks</p> :
        finishedStories.map(story => (
          <li
            className='vertical-table-item'
            key={story.id}>
            {story.description}
          </li>)
        )}
    </ul>
  </div>
}

export default AssignedStories