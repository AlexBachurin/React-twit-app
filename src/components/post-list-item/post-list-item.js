import React, { Component } from "react";
import './post-list-item.css'

export default class PostListItem extends Component {


    render() {
        const { label, onDelete, onToggleFavorite, onToggleLike, favorite, liked } = this.props;
        //store all classes 
        let classNames = 'app-list-item d-flex justify-content-between';
        //if post is favorite add favorite class to all classNames, space is necessary
        if (favorite) {
            classNames += ' favorite'
        }

        if (liked) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <div className="d-flex app-list-item-post-container">
                    <span className="app-list-item-label">
                        {label}
                    </span>
                    <i onClick={onToggleLike} className="fas fa-thumbs-up"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleFavorite} type='button' className='btn-star btn-sm'>
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={onDelete} type='button' className='btn-trash btn-sm'>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}


