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
    self.priority || self.priority = count_by_project_and_iteration + 1
  end

  def self.update_priorities(story, priority)
    match = story.matching_project_and_iteration
                .find_by(priority: priority)

    if match
      priority = priority.to_i + 1
      Story.update_priorities(match, priority)
      match.update(priority: priority)
      match.save
    end
  end

  def matching_project_and_iteration
    Story
      .where(iteration: self.iteration)
      .where(project_id: self.project_id)
  end

  def count_by_project_and_iteration
    self.matching_project_and_iteration.count
  end
end

# s = Story.new
# s.description = 'adadfsaf'
# s.story_type = 'bug'
# s.iteration = 'feature'
# s.complexity = 1
# s.project_id = 1
# s.author_id = 1
