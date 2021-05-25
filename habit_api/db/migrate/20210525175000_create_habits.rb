class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.string :name
      t.boolean :is_good
      t.integer :do_count

      t.timestamps
    end
  end
end
