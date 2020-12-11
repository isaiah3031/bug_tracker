require 'rails_helper'

RSpec.describe Story, type: :model do
  it { should belong_to(:project) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:story_type) }
  it { should validate_inclusion_of(:story_type).
        in_array(['bug', 'feature'])}
  it { should validate_presence_of(:iteration) }
  it { should validate_inclusion_of(:iteration).
        in_array(['current', 'backlog', 'icebox']) }
  it { should validate_inclusion_of(:complexity).
        in_array([-1, 1, 2, 3]) }
  it { should validate_inclusion_of(:status).
        in_array(['', 'in_progress', 'finished']) }
end
