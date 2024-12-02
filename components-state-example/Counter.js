import React, {useState} from 'react';
import './Counter.css';

const Counter = () =>{
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount (count + 1);
    }

    const decrement = () =>{
        setCount (count - 1);
    }

    return(
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={increment}>Up</button>
            <button onClick={decrement}>Down</button>
        </div>
    )
}

export default Counter;