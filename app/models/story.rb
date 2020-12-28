class Story < ApplicationRecord
  belongs_to :project
  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :assigned_users, foreign_key: :assigned_to, class_name: :User, optional: true
  validates :description, :story_type, :iteration, presence: :true
  validates :story_type, inclusion: { in: %w(bug feature)}
  validates :iteration, inclusion: { in: %w(current backlog icebox finished)}
  validates :complexity, :priority, inclusion: { in: [-1, 1, 2, 3]}
end

