import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../../../frontend/store/store'
import Root from '../../../frontend/components/root'

// import { signup, login, logout } from '../../../frontend/actions/session_actions'
// window.signup = signup;
// window.login = login;
// window.logout = logout

import { fetchProjects, fetchProject, createProject, editProject } from '../../../frontend/actions/project_actions.js'
window.fetchProject = fetchProject;
window.fetchProjects = fetchProjects;
window.createProject = createProject;
window.editProject = editProject;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
    store = configureStore();
  // }
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root)
})