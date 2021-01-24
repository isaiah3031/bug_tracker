# Go through update_priorities slowly with a pen and paper or debugger.

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
    self.priority ||= next_priority
  end

  # Returns the number of stories belonging to the same project and iteration + 1.
  def next_priority
    self.matching_project_and_iteration.count + 1
  end

  # returns a project with a matching project, iteration, and priority.
  # if one is found it updates the priority by adding one
  # then calls the method again with the new story and priority
  def update_priorities(goalPriority)
    if priority != goalPriority
      swap_adjacent_priorities(goalPriority)
    else
      return
    end

    update_priorities(goalPriority)
  end

  # Swaps the priorities of stories ajacent to the one passed
  def swap_adjacent_priorities(goalPriority)
    # if the story's priority is greater the goal add one. Else add two. 
    next_priority = self.priority > goalPriority ? self.priority - 1 : self.priority + 1
    
    self.matching_project_and_iteration
         .where(priority: next_priority)
         .update(priority: self.priority)

    self.update(priority: next_priority)
  end

  # Returns stories belonging to the same project and iteration.
  def matching_project_and_iteration
    Story
      .where(iteration: self.iteration)
      .where(project_id: self.project_id)
  end
end

# s = Story.new
# s.description = 'adadfsaf'
# s.story_type = 'bug'
# s.iteration = 'feature'
# s.complexity = 1
# s.project_id = 1
# s.author_id = 1
