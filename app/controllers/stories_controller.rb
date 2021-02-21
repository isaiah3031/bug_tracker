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
    @story = Story.find_by_id(story_params_with_priority[:id])

    if @story.priority != story_params_with_priority[:priority]
      @story.update_priorities(story_params_with_priority[:priority].to_i) 
    end

    if @story.update(story_params)
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
      :project_id,
      :author_id,
      :assigned_to,
      :id
    )
  end

    def story_params_with_priority
    params.require(:story).permit(
      :description,
      :story_type,
      :iteration,
      :complexity,
      :project_id,
      :priority,
      :author_id,
      :assigned_to,
      :id
    )
  end
end
