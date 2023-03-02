import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import todo from './components/todoList/todoListSlice';
import counter from './components/counter/counterSlice';
// *** DISPATCH БЕРЕТ ACTION И ПЕРЕДАЕТ К REDUCER ***

// SETTINGS FOR DEVTOOLS REDUX
const store = configureStore({
  reducer: {todo, counter},
  devTools: process.env.NODE_ENV !== 'production'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/* const bindActionCreater = (creater, dispatch) => (...args) => {
  dispatch(creater(...args))
} */