import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = ({posts}) => {
    //take data from props and transform it to jsx
    const elems = posts.map(item => {
        //take id from item through destructure
        const {id} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem label={item.label} important={item.important}/>
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elems}
            
        </ul>

    )
}

export default PostList;