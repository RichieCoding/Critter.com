# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_30_152004) do

  create_table "likes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "thought_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["thought_id"], name: "index_likes_on_thought_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "replies", force: :cascade do |t|
    t.integer "user_id"
    t.integer "thought_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["thought_id"], name: "index_replies_on_thought_id"
    t.index ["user_id"], name: "index_replies_on_user_id"
  end

  create_table "thoughts", force: :cascade do |t|
    t.integer "user_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_thoughts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "species"
    t.string "diseases"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

end
