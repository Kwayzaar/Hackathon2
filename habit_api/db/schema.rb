ActiveRecord::Schema.define(version: 2021_05_25_175000) do

  create_table "habits", force: :cascade do |t|
    t.string "name"
    t.boolean "is_good"
    t.integer "do_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
