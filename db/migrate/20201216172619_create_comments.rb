class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.boolean :is_reject
      t.integer :story_id

      t.timestamps
    end
    add_index :comments, :story_id
  end
end
