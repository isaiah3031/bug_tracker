require 'test_helper'
require 'rspec'
class UserTest < ActiveSupport::TestCase
  context 'validations' do
    should validate_presence_of(:username)
  end
end
