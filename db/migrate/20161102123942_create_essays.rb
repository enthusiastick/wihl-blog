class CreateEssays < ActiveRecord::Migration[5.0]
  def change
    create_table :essays do |t|
      t.string :author, null: false
      t.text :body, null: false
      t.date :publication_date, null: false
      t.string :slug, null: false
      t.string :title, null: false

      t.timestamps
    end
    add_index :essays, :slug, unique: true
    add_index :essays, :title, unique: true
  end
end
