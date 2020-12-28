class RemoveStatusColumnFromStories < ActiveRecord::Migration[6.0]
  def change
    remove_column :stories, :status, :string
    remove_column :stories, :title, :string
  end
end
