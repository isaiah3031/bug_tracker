import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { AuthRoute } from '../util/route_util'
import ProjectListContainer from './projects/project_list_container'
import ProjectDetailContainer from './projects/project_detail_container'
const App = () => (
  <div>
    <header>
      <h1>Bug Tracker React</h1>
      <GreetingContainer/>
     
    </header>
     <ProjectListContainer/>
    <Route path='/projects/:projectId' component={ProjectDetailContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;