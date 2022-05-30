import React,{useState} from 'react';
import Child from './child';

export const Parent = () => {

    const [text, setText] = useState('');

    const handler = (event) => {
        setText(event.target.value)
    }
    return(
        <div>
            <input type='text' placeholder='enter text' onChange={handler}/>
            <Child text={text}/>
        </div>
        
    )
}