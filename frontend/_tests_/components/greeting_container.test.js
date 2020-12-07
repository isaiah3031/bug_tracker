import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import GreetingContainer from '../../components/greeting/greeting_container'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import ShallowRenderer from 'react-test-renderer/shallow'
import { StaticRouter } from 'react-router'
const renderer = new ShallowRenderer()
const mockStore = configureStore([])
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {

  let store = mockStore({
    entities: { users: { }}
  })
    const wrapper = renderer.render(
    <Provider store={store}>
      <StaticRouter>
        <GreetingContainer />
      </StaticRouter>      
    </Provider>)
    const result = wrapper.find(GreetingContainer)
  expect(result.type).toBe('form');
})
