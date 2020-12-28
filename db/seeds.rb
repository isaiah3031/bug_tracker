# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'isaiah30', password: 'yellow')
Project.create(name: 'this is number one')

Story.create(
  description: 'two twotwotwo',
  story_type: 'bug',
  iteration: 'current',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 1
)

Project.create(name: 'Bug Tracker')

Story.create(
  description: 'Page should refresh when creating a story. Instead an error is raised. "Cannot read property "priority" of null at story_list.jsx:50"',
  story_type: 'bug',
  iteration: 'finished',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'Long story lists should have a scroll bar.',
  story_type: 'feature',
  iteration: 'finished',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'Feature column should include option to enter finish. Finished stories should be displayed near the other iterations.',
  story_type: 'feature',
  iteration: 'current',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'The stories priority column should be a specific integer that represents its exact place out of stories belonging to the same project and iteration.',
  story_type: 'feature',
  iteration: 'backlog',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'Should be able to drag and drop stories up or down to update its priority.',
  story_type: 'feature',
  iteration: 'backlog',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'Story detail component should only show a short amount of the description by default. Should show full description only when the story is selected.',
  story_type: 'feature',
  iteration: 'backlog',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'There should be a loading animation to hide loading screens.',
  story_type: 'feature',
  iteration: 'backlog',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)

Story.create(
  description: 'Forms need a larger description setting and a consistent font size(check the toggle new form component).',
  story_type: 'feature',
  iteration: 'backlog',
  complexity: -1,
  priority: 2,
  author_id: 1,
  project_id: 2
)