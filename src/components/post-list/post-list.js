import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'


//function to check if we passed an obj in props
function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null && (item instanceof Date === false));
}

const PostList = ({ posts }) => {
    //take data from props and transform it to jsx
    const elems = posts.map(item => {
        //check if item is an object, then we pass further, if not continue with next item
        if (isObject(item)) {
            //take id from item through destructure
            const { id } = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem onDelete={()=>console.log('deleted')} label={item.label} important={item.important} />
                </li>
            )
        }

    })
    return (
        <ul className="app-list list-group">
            {elems}

        </ul>

    )
}

export default PostList;