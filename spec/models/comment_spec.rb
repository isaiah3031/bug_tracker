require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should validate_presence_of(:text) }
  it { should belong_to(:author)}
  it { should validate_inclusion_of(:is_reject).
    in_array([true, false]) }
  it { should validate_presence_of(:story_id) }
  it { should belong_to(:story) }
end
