import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { createStore } from 'redux';
// import reducer from './reducer';
import { Provider } from 'react-redux';

// const store = createStore(reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// СОСТОЯНИЕ
const initialState = {
  value: 0
}

// *** DISPATCH БЕРЕТ ACTION И ПЕРЕДАЕТ К REDUCER ***

// REDUCER КОТОРЫЙ МЕНЯЕТЬ СОСТОЯНИЕ ПРИЛОЖЕНИЕ
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      }
    case "DEC": 
      return {
        ...state,
        value: state.value - 1
      }
    case "RND":
      return {
        ...state,
        value: state.value * action.payload
      }
    default:
      return state;
  }
}

// ХРАНИЛИЩЕ В КОТОРОМ ХРАНИТЬСЯ REDUCER И СОСТОЯНИЕ
const store = createStore(reducer)

// ПОЛУЧЕНИЕ ИЗМЕННЕННЫХ ДАННЫХ
const update = () => {
  document.getElementById('counter').textContent = store.getState().value
}

// ПОДПИСКА К ИЗМЕНЕНИЮ 
store.subscribe(update)

// store.dispatch({type: "INC"})
// reducer(initialState.value, {type: "INC"})

document.getElementById('inc').addEventListener('click', () => {
  // DISPATCH, ПЕРЕДАЕМ ACTION ДЕЙСТВИЕ К REDUCER
  store.dispatch({type: "INC"})
})

document.getElementById('dec').addEventListener('click', () => {
  // DISPATCH, ПЕРЕДАЕМ ACTION ДЕЙСТВИЕ К REDUCER
  store.dispatch({type: "DEC"})
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  // DISPATCH, ПЕРЕДАЕМ ACTION ДЕЙСТВИЕ К REDUCER
  store.dispatch({type: "RND", payload: value})
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App/>
    </Provider> */}
  </React.StrictMode>
);