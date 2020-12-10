class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :description
      t.string :type
      t.string :iteration
      t.integer :complexity
      t.string :status
      t.integer :project_id

      t.timestamps
    end
    add_index :stories, :title
    add_index :stories, :project_id
  end
end
