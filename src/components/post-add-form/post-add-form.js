import React from "react";
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <form action="POST" className='bottom-panel d-flex'>
            <input className='form-control new-post-label' type="text" placeholder='что хотите добавить?' />
            <button onClick={() => onAdd('hello')} type='submit' className='btn btn-outline-secondary'>Добавить</button>
        </form>
    )
}

export default PostAddForm;