import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './restaurant/waiter/App'
import howToRedo from './kitchen/comment'
import './index.css'

const store = createStore(howToRedo)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
