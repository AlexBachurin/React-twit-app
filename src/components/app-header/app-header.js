import React from 'react';
import './app-header.css'

const AppHeader = ({likedPosts, postsLength}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Alex Bachurin</h1>
            <h2>{postsLength} записей, из них понравилось {likedPosts}</h2>
        </div>
    )
}

export default AppHeader;