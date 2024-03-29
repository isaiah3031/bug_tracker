require 'bcrypt'

class User < ApplicationRecord
  has_many :comments, foreign_key: :author_id, class_name: :Comment
  has_many :assigned_stories, foreign_key: :assigned_to, class_name: :Story
  has_many :stories, foreign_key: :author_id, class_name: :Story
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      false
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.session_token = User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
  end
end

