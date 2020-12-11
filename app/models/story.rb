class Story < ApplicationRecord
  belongs_to :project
  validates :title, :description, :story_type, :iteration, presence: :true
  validates :story_type, inclusion: { in: %w(bug feature)}
  validates :iteration, inclusion: { in: %w(current backlog icebox)}
  validates :complexity, inclusion: { in: [-1, 1, 2, 3]}
  validates :status, inclusion: { in: ['', 'in_progress', 'finished']}
end

