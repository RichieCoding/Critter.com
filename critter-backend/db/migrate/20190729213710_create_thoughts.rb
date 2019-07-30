class CreateThoughts < ActiveRecord::Migration[5.2]
  def change
    create_table :thoughts do |t|
      t.belongs_to :user, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
