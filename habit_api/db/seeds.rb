# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Habit.destroy_all

meditation = Habit.create name: 'Meditation', is_good: true, do_count: 0
exercise = Habit.create name: 'Exercise', is_good: true, do_count: 0
healthy_eating = Habit.create name: 'Healthy Eating', is_good: true, do_count: 0

unhealthy_eating = Habit.create name: 'Unhealthy Eating', is_good: false, do_count: 0 
smoking = Habit.create name: 'Smoking', is_good: false, do_count: 5
excess_screen_time = Habit.create name: 'Excess Screen Time', is_good: false, do_count: 0

