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

  def show
    @project = Project.find(params[:id])
    if @project
      render 'show'
    else
      render json: { errors: 'Project not found'}
    end
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

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      render json: { success: 'Successfully deleted' }
    else
      render json: { errors: 'project not found'}
    end
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end
end
