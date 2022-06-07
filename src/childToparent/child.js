import React from 'react';

 const Child = ({onChange})=> {
   
  const handler = (event) =>{
    onChange(event.target.value)
  }

  return (
    <div>
       <h3>from Child Component</h3>
       <input type='text' placeholder='enter text' onChange={handler}/>
    </div>
  )
}
export default Child;