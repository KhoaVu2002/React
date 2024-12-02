import React from 'react';


const ButtonClick = () =>{
    const handleClick = () =>{
        console.log('Clicked!');
    };
    return(
        <div className='button-container'>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default ButtonClick; 