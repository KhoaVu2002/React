import React from 'react';
import './BlogPost.css';

const BlogPost = ({post}) =>{
    return(
        <div className='blog-post'>
            <img className='post-image' src={post.image} alt={post.title}></img>
            <h2>{post.title}</h2>
            <p className='post-date'>{post.date}</p>
            <p>{post.content}</p>
        </div>
    )
}

export default BlogPost;