class Comment < ApplicationRecord
  belongs_to :story
  validates :text, :is_reject, :story_id, presence: true
end
