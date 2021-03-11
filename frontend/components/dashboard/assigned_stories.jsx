import React from 'react'

const AssignedStories = ({ currentUser }) => {
  if (!currentUser || !currentUser.story) return null
  const assigned_stories = Object.values(currentUser.story)

  return (
    <ul className='vertical-table'>
      <h2>TodoList</h2>
      { assigned_stories.map(story => (
        <li
          className='vertical-table-item'
          key={story.id}>
          {story.description}
        </li>)
      )}
    </ul>
  )
}

export default AssignedStories