class Comment < ApplicationRecord
  belongs_to :story
  belongs_to :author, class_name: 'User', foreign_key: :author_id
  validates :text, :story_id, presence: true
  validates :is_reject, inclusion: { in: [true, false]}
end
