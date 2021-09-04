import React from "react";
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <form onSubmit={onAdd} action="POST" className='bottom-panel d-flex'>
            <input className='form-control new-post-label' type="text" placeholder='что хотите добавить?' />
            <button type='submit' className='btn btn-outline-secondary'>Добавить</button>
        </form>
    )
}

export default PostAddForm;