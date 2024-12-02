import React from 'react';
import './Avatar.css';

const Avatar = ({imgUrl}) =>{
    return(
        <div className='avatar'>
            <img src={imgUrl} alt='image'></img>
        </div>
    )
}

export default Avatar;