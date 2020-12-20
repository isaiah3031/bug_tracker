class UserStoryRelations < ActiveRecord::Migration[6.0]
  def change
    add_column :stories, :author_id, :integer
    add_column :stories, :assigned_to, :integer
    add_column :comments, :author_id, :integer
    add_index :stories, :author_id
    add_index :stories, :assigned_to
    add_index :comments, :author_id
  end
end
