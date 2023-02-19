import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, bindActionCreators } from 'redux';

import * as actions from './actions';
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

/* onst bindActionCreater = (creater, dispatch) => (...args) => {
  dispatch(creater(...args))
} */

// USE library bindActionCreators
const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

/* const incDispatch = bindActionCreators(inc, dispatch) 
const decDispatch = bindActionCreators(dec, dispatch)
const rndDispatch = bindActionCreators(rnd, dispatch) */

document.getElementById('inc').addEventListener('click',inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rnd(value)
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App/>
    </Provider> */}
  </React.StrictMode>
);