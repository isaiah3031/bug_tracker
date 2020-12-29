class Story < ApplicationRecord
  belongs_to :project
  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :assigned_users, foreign_key: :assigned_to, class_name: :User, optional: true
  validates :description, :story_type, :iteration, presence: :true
  validates :story_type, inclusion: { in: %w(bug feature)}
  validates :iteration, inclusion: { in: %w(current backlog icebox finished)}
  validates :complexity, inclusion: { in: [-1, 1, 2, 3]}
  before_validation :ensure_priority

  def ensure_priority
    self.priority || self.priority = countByProjectAndIteration + 1
  end

  def countByProjectAndIteration
    Story
      .where(iteration: self.iteration)
      .where(project_id: self.project_id)
      .count
  end
end

s = Story.new
s.description = 'adadfsaf'
s.story_type = 'bug'
s.iteration = 'feature'
s.complexity = 1
s.project_id = 1
s.author_id = 1
