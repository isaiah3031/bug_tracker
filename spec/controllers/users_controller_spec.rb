require 'faker'
require 'rails_helper'
 
RSpec.describe 'Users', type: :request do
  describe 'post api/users/' do
    context 'when given incorrect params' do
      before do
        post '/api/users', params: { user: {  username: Faker::Name.name, password: '123' } }
      end
      it 'returns success' do
        expect(response).to have_http_status(:success)
      end
      it 'JSON body response constains an error hash' do
        json_response = JSON.parse(response.body)
        expect(json_response.keys).to match_array(['error'])
      end
      
    end
    before do
      post '/api/users', params: { user: {  username: Faker::Name.name, password: 'password' } }
    end
    
    it 'returns success' do
      expect(response).to have_http_status(:success)
    end

    it 'JSON body response contains expected user attributes' do
      json_response = JSON.parse(response.body)
      expect(json_response.keys).to match_array(['id', 'username'])
    end
  end
end