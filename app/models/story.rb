class Story < ApplicationRecord
  belongs_to :project
  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :assigned_users, foreign_key: :assigned_to, class_name: :User, optional: true
  validates :description, :story_type, :iteration, presence: :true
  validates :story_type, inclusion: { in: %w(bug feature)}
  validates :iteration, inclusion: { in: %w(current backlog icebox finished)}
  validates :complexity, inclusion: { in: [-1, 1, 2, 3]}
  before_validation :ensure_priority

  # Sets the priority to the 1 + the count of stories with this same project and iteration.
  # By default each priority is unique.
  def ensure_priority
    self.priority || self.priority = count_by_project_and_iteration + 1
  end

  def self.swap_priorities(story1, story2)
    let priority1 = story1.priority
    let priority2 = story2.priority
    story1.update(priority: priority2)
    story2.update(priority: priority1)
  end
  # returns a project with a matching project, iteration, and priority.
  # if one is found it updates the priority by adding one
  # then calls the method again with the new story and priority
  def self.update_priorities(story, goalPriority=nil)
    match = story.matching_project_and_iteration
           .where.not(id: story.id)
           .find_by(priority: story.priority )
    goalPriority ||= story.findGoal
    return if !goalPriority || !match || goalPriority == match.priority || goalPriority == story.priority
    
    if (match.priority > goalPriority)
      match.update(priority: match.priority - 1)
    elsif (match.priority < goalPriority)
      match.update(priority: match.priority + 1)
    end
    update_priorities(match, goalPriority)
  end
  
  def findGoal
    self.matching_project_and_iteration.each_with_index do |story, index|
      return index + 1 unless story.priority == index + 1
    end  
  end

  def ensure_unique_priorities
    self.matching_project_and_iteration.each_with_index do |story, index|
      story.update(priority: index + 1) unless story.priority == index + 1 && story != self
    end  
  end 

  # Returns stories belonging to the same project and iteration.
  def matching_project_and_iteration
    Story
      .where(iteration: self.iteration)
      .where(project_id: self.project_id)
  end

  # Returns the number of stories belonging to the same project and iteration.
  def count_by_project_and_iteration
    self.matching_project_and_iteration.count
  end
end

# s = Story.new
# s.description = 'adadfsaf'
# s.story_type = 'bug'
# s.iteration = 'feature'
# s.complexity = 1
# s.project_id = 1
# s.author_id = 1
