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
  title: 'two',
  description: 'two twotwotwo',
  story_type: 'bug',
  iteration: 'current',
  complexity: -1,
  status: '',
  priority: 2,
  author_id: 1,
  project_id: 1
)

Story.create(
  title: 'three',
  description: 'three three three three ',
  story_type: 'bug',
  iteration: 'current',
  complexity: -1,
  status: '',
  priority: 3,
  author_id: 1,
  project_id: 1
)
Story.create(
  title: 'rendering problems',
  description: 'something breaks when I do a thing', 
  story_type: 'bug', 
  iteration: 'current',
  complexity: -1,
  status: '' ,
  priority: 1,
  author_id: 1,
  project_id: 1
)

Story.create(
  title: 'rendering problemsb',
  description: 'something breaks when I do a thing', 
  story_type: 'bug', 
  iteration: 'backlog',
  complexity: -1,
  status: '' ,
  priority: 1,
  author_id: 1,
  project_id: 1
)
Story.create(
  title: 'twob',
  description: 'two twotwotwo', 
  story_type: 'bug', 
  iteration: 'backlog',
  complexity: -1,
  status: '' ,
  priority: 2,
  author_id: 1,
  project_id: 1
)

Story.create(
  title: 'twoi',
  description: 'two twotwotwo', 
  story_type: 'bug', 
  iteration: 'icebox',
  complexity: -1,
  status: '' ,
  priority: 1,
  author_id: 1,
  project_id: 1
)

Comment.create(
  text: 'this is just a test',
  is_reject: false,
  author_id: 1,
  story_id: 1
)

Comment.create(
  text: 'this is not just a test',
  is_reject: false,
  author_id: 1,
  story_id: 1
)

Comment.create(
  text: 'this is not not just a test',
  is_reject: false,
  author_id: 1,
  story_id: 1
)