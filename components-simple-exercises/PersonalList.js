import React from 'react';
import './PersonalList.css';

const PersonalList = ({people}) =>{
    return(
        <ul className='people-list'>
            {people.map((person, index) =>(
                <li key={index} className='person-item'>
                    {person}
                </li>
            ))}
        </ul>
    )
}
export default PersonalList;