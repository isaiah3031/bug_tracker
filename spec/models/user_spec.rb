require 'rails_helper'
require 'faker'

RSpec.describe User, type: :model do
  it { should have_many(:comments)}
  it { should have_many(:assigned_stories) }
  it { should have_many(:stories)}
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe 'user' do
    u = User.new
    u.username = Faker::Name.name
    u.password = 'password'

    it 'creates a new user' do
      expect(u.save!).to eq(true)
    end

    u.save

    it "verifies a user's password" do
      expect(u.is_password?('password')).to eq(true)
    end

    it "Verifies correct login credentials and returns a user" do
      name = Faker::Name.name
      user = User.create(username: name, password: 'password')
      expect(User.find_by_credentials(name, 'password')).to eq(user)
    end

    it "Does not verify incorrect login credentials" do
      expect(User.find_by_credentials('NottaUser', 'password')).to eq(false)
    end

    it "generates a random session token" do
      expect(User.generate_session_token).not_to eq(User.generate_session_token)
    end

    it 'resets the users session token' do
      old_session_token = u.session_token
      u.reset_session_token
      new_session_token = u.session_token
      expect(old_session_token).not_to eq(new_session_token)
    end

    it 'Ensures a session token is set' do
      u = User.new
      expect(u.session_token).not_to eq(nil)
    end
  end
end
