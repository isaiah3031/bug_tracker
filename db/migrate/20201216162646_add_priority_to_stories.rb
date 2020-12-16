class AddPriorityToStories < ActiveRecord::Migration[6.0]
  def change
    add_column :stories, :priority, :integer
  end
end
