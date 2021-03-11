json.partial! 'api/users/user', user: @user

if @user.assigned_stories.present?
  json.assigned_stories do
    @user.assigned_stories.map do |story|
      json.set! story.id do
        json.partial! 'stories/story', story: story
      end
    end
  end
end