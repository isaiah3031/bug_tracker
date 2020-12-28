class StoriesController < ApplicationController
  def index
    project = Project.find_by_id(params[:project_id]) 
    if project
      @stories = project.stories
      render 'index'
    else
      render json: { error: 'Project not found.' }
    end
  end

  def show
    @story = Story.find_by_id(params[:id])
    if @story
      render 'show'
    else
      render json: { error: 'Story not found.' }
    end
  end 

  def create
    @story = Story.new(story_params)
    if @story.save
      render 'show'
    else
      render json: { error: 'Not all values were found.'}
    end
  end

  def edit
    @story = Story.find_by_id(params[:id])
    if @story.update(story_params)
      @story.save
      render 'show'
    else
      render json: { error: 'Not all values were found.' }
    end
  end

  private

  def story_params
    params.require(:story).permit(
      :description,
      :story_type,
      :iteration,
      :complexity,
      :priority,
      :project_id,
      :author_id,
      :assigned_to
    )
  end
end
