import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';

import {inc, dec, rnd} from './actions';
import reducer from './reducer';

// *** DISPATCH БЕРЕТ ACTION И ПЕРЕДАЕТ К REDUCER ***

// ХРАНИЛИЩЕ В КОТОРОМ ХРАНИТЬСЯ REDUCER И СОСТОЯНИЕ
const store = createStore(reducer)

const {dispatch, subscribe, getState} = store

// ПОЛУЧЕНИЕ ИЗМЕННЕННЫХ ДАННЫХ
const update = () => {
  document.getElementById('counter').textContent = getState().value
}

// ПОДПИСКА К ИЗМЕНЕНИЮ 
subscribe(update)

const bindActionCreater = (creater, dispatch) => (...args) => {
  dispatch(creater(...args))
}

const incDispatch = bindActionCreater(inc, dispatch)
const decDispatch = bindActionCreater(dec, dispatch)
const rndDispatch = bindActionCreater(rnd, dispatch)

document.getElementById('inc').addEventListener('click',incDispatch)

document.getElementById('dec').addEventListener('click', decDispatch)

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rndDispatch(value)
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App/>
    </Provider> */}
  </React.StrictMode>
);