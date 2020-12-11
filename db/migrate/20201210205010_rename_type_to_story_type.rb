class RenameTypeToStoryType < ActiveRecord::Migration[6.0]
  def change
    rename_column :stories, :type, :story_type
  end
end
