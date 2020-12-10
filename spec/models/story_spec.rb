require 'rails_helper'

RSpec.describe Story, type: :model do
  it { should belong_to(:project)}
end
