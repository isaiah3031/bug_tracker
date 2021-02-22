class Project < ApplicationRecord
  validates :name, presence: true
  has_many :stories, :dependent => :delete_all
end
