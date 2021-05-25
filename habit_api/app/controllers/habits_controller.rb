class HabitsController < ApplicationController

  # GET
  def index
    @habits = Habit.all
    render json: @habits
  end
end
