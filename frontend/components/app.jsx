import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
// import ProjectListContainer from './projects/project_list_container'
import Dashboard from './dashboard/dashboard'
import ProjectDetailContainer from './projects/project_detail_container'
import NewProjectFormContainer from './projects/new_project_form_container'
import EditProjectFormContainer from './projects/edit_project_form_container'

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <ProtectedRoute path='/projects/:projectId/edit' component={EditProjectFormContainer} />
      <ProtectedRoute path='/projects/new' component={NewProjectFormContainer} />
      <Route exact path='/projects/:projectId' component={ProjectDetailContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Dashboard path='/' />
    </Switch>
  </div>
);

export default App;