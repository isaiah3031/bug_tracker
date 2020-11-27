require 'faker'

RSpec.describe 'Sessions', type: :request do
  describe 'post sessions#create' do
    context 'with correct params' do
      before do
        name = Faker::Name.name
        User.create(username: name, password: 'password')
        post '/api/sessions', params: { user: { username: name, password: 'password' } }
      end

      it 'returns success' do
        expect(response).to have_http_status(:success)
      end

      it 'logs in a user' do
        json_response = JSON.parse(response.body)
        expect(json_response.keys).to match_array(['id', 'username'])
      end
    end

    context 'with incorrect params' do
      before do
        post '/api/sessions', params: { user: { username: 'wrongDoug', password: '123' } }
      end

      it 'returns an error message' do
        json_response = JSON.parse(response.body)
        expect(json_response.values).to match_array(['Incorrect credentials.'])
      end
    end
  end

  describe 'delete sessions#delete' do
    before do
      name = Faker::Name.name
      User.create(username: name, password: 'password')
      post '/api/sessions', params: { user: { username: name, password: 'password' } }
    end

    it 'returns a success' do
      delete api_sessions_url
      expect(response).to have_http_status(:success)
    end

    it 'changes the session token' do
      expect(User.last.session_token).to eq(session[:session_token])
      delete api_sessions_url
      expect(User.last.session_token).not_to eq(session[:session_token])
    end

    it 'returns a success message' do
      delete api_sessions_url
      json_response = JSON.parse(response.body)
      expect(json_response.values).to match_array(['Successfully logged out.'])
    end
  end
end