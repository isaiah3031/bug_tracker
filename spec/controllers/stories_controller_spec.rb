require 'faker'

RSpec.describe 'Stories', type: :request do
  describe 'get stories#index' do
    it 'returns success' do
      get '/project/1/stories'
      expect(response).to have_http_status(:success)
    end

    it 'returns stories associated with a project' do
      Project.create(name: 'test project')
      Story.create(
        title: 'rendering problems', 
        description: 'something breaks when I do a thing', 
        story_type: 'bug', 
        iteration: 'current',
        complexity: -1,
        status: '' ,
        project_id: 1,
        priority: 1
      )
      get '/project/1/stories'
      json_response = JSON.parse(response.body)
      project = Project.find(1)
      expect(json_response.keys.length).to eq(project.stories.length)
    end
  end

  describe 'post stories#create' do
    it 'returns success' do
      post '/project/1/stories', params: {
        story: {
          title: 'problem', 
          description: 'this ones new', 
          story_type: 'bug', 
          iteration: 'current',
          complexity: -1,
          status: '' ,
          project_id: 1,
          priority: 1
        }
      }
      expect(response).to have_http_status(:success)
    end

    it 'Creates a story' do
      title = Faker::Book.title
      post '/project/1/stories', params: {
        story: {
          title: title,
          description: 'description',
          story_type: 'bug',
          iteration: 'current',
          complexity: -1,
          status: '',
          priority: 1,
          project_id: 1
        }
      }
      json_response = JSON.parse(response.body)
      expect(Story.last.title).to eq(title)
    end
  end

  describe 'edit stories#edit' do
    it 'returns success' do
      post '/project/1/stories', params: {
        story: {
          title: Faker::Book.title, 
          description: 'this ones new', 
          story_type: 'bug', 
          iteration: 'current',
          complexity: -1,
          status: '' ,
          priority: 1,
          project_id: 1
        }
      }
      story_id = Story.last.id
      get "/project/1/stories/#{story_id}/edit", params: {
        story: {
          title: 'CHANGED', 
          description: 'this ones new', 
          story_type: 'bug', 
          iteration: 'current',
          complexity: -1,
          status: '' ,
          priority: 1,
          project_id: 1
        }
      }
      expect(response).to have_http_status(:success)
    end

    it 'Edits a story story' do
      post '/project/1/stories', params: {
        story: {
          title: Faker::Book.title, 
          description: 'this ones new', 
          story_type: 'bug', 
          iteration: 'current',
          complexity: -1,
          status: '' ,
          priority: 1,
          project_id: 1
        }
      }
      story_id = Story.last.id
      get "/project/1/stories/#{story_id}/edit", params: {
        story: {
          title: 'CHANGED', 
          description: 'this ones new', 
          story_type: 'bug', 
          iteration: 'current',
          complexity: -1,
          status: '' ,
          priority: 1,
          project_id: 1
        }
      }
      expect(Story.last.title).to eq('CHANGED')
      expect(Story.last.id).to eq(story_id)
    end
  end
end