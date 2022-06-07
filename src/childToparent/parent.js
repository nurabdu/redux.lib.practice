import React,{useState} from 'react';
import Child from './child';

export const Parent2 = () => {

    const [text, setText] = useState('');

    const handlers = (text) => {
        setText(text)
    }
    return(
        <div className='parent'>
            <h3>to Parent Component</h3>
           input text:  {text}
            <Child onChange={handlers}/>
        </div>
        
    )
}