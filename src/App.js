import React, { createRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  
  const addcash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  };
  const getcash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  };

return (
  <>
    <div className="App">
      <button onClick={()=> addcash(Number(prompt()))}>add cash</button>
      <button onClick={()=> getcash(Number(prompt()))}>get cash</button>
      <div>{cash}</div>
    </div>
  </>
);
}

export default App;
