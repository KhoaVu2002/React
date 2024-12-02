import React from 'react';
import './BookList.css';

const BookList = ({books}) =>{
    return(
        <ul className='book-list'>
            {books.map((book, index) =>(
                <li 
                key={index}>
                {book}
                </li>
            ))}
        </ul>
    )
}

export default BookList;