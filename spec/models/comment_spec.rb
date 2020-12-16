require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should validate_presence_of(:text) }
  it { should validate_presence_of(:is_reject) }
  it { should validate_presence_of(:story_id) }
  it { should belong_to(:story) }
end
