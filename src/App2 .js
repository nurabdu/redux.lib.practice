import React from 'react';
import './App2.css';
import { Parent } from './parentTochild/parent';
import { Parent2 } from './childToparent/parent';

function App2() {

  //componentDidMount(){
  //  fetch();
  //  response = response.json();
  //}
return (
  <>
    <div className="App">
      <Parent/>
      <Parent2/>
    </div>
  </>
);
}

export default App2;
