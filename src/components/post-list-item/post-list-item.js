import React, { Component } from "react";
import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            liked: false
        }
        this.onImportantChange = this.onImportantChange.bind(this);
        this.onLikeChange = this.onLikeChange.bind(this);
    }
    //change on click on star btn
    onImportantChange() {
        this.setState(({ important }) => ({
            important: !important
        }))
    }
    //change on like btn
    onLikeChange() {
        this.setState(({ liked }) => ({
            liked: !liked
        }))
    }
    render() {
        const { label } = this.props;
        const { important, liked } = this.state;
        //store all classes 
        let classNames = 'app-list-item d-flex justify-content-between';

        //if post is important add important class to all classNames, space is necessary
        if (important) {
            classNames += ' important'
        }
        if (liked) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <div className="d-flex app-list-item-post-container">
                    <span  className="app-list-item-label">
                        {label}
                    </span>
                    <i onClick={this.onLikeChange} className="fas fa-thumbs-up"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.onImportantChange} type='button' className='btn-star btn-sm'>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm'>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}


