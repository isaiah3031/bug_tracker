class ProjectController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'show'
    else
      render json: { errors: 'Please enter a name for the project' }
    end
  end

  def index
    @projects = Project.all
    render 'index'
  end

  def edit
    @project = Project.find(params[:id])
    @project.name = project_params[:name]
    if @project.save
      render 'show'
    else
      render json: { errors: 'Please enter a name for the project'}
    end
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end
end
