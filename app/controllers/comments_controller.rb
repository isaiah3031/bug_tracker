class CommentsController < ApplicationController
  def index
    @comments = Comment.where(story_id: params[:story_id])
    if @comments
      render 'index'
    else
      render json: { error: 'Not all values were found.' }
    end
  end

  def create
    @comment = Comment.new(comments_params)
    if @comment.save
      render 'show'
    else
      render json: { error: 'Not all values were found.' }
    end
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render 'show'
    else
      render json: { error: 'Comment not found' }
    end
  end

  def edit
    @comment = Comment.find_by_id(params[:id])
    if @comment.update(comments_params)
      @comment.save
      render 'show'
    else
      render json: { error: 'Not all values were found.' }
    end
  end

  private

  def comments_params
    params.require(:comment).permit(:text, :is_reject, :story_id, :author_id)
  end
end
