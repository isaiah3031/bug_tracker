class Project < ApplicationRecord
  validates :name, presence: true
  has_many :stories, :dependent => :delete_all
  before_save :ensure_id

  def ensure_id
    self.id = SecureRandom::random_number(99999999)
  end
end

