import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2 ';
// import {legacy_createStore as createStore} from 'redux';
// import { Provider } from 'react-redux';

// const defaultState = {
//   cash: 0,
// }
// const reducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case "ADD_CASH":
//       return{...state, cash: state.cash + action.payload}
//       case "GET_CASH":
//         return{...state, cash: state.cash - action.payload}
//         default: 
//         return state
//   }
// }

// const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App2 />
    {/* </Provider> */}
  </React.StrictMode>
);

