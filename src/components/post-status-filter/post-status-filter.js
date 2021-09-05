import React, { Component } from 'react';
import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'liked', label: 'Понравилось'}
        ]
    }
    render() {
        const btns = this.buttons.map(({name, label}) => {
            //if passed filter and name of button matches active will be true
            const active = this.props.filter === name;
            //if active add class that shows active btn, else give secondary class
            const addClass = active ? 'btn-info' : 'btn-outline-secondary'
             return (
                <button onClick={() => this.props.onFilterSelect(name)} key={name} type='button' className={`btn ${addClass}`}>{label}</button>
             )   
        } )
        return (
            
            <div className="btn-group">
                {btns}  
            </div>
        )
    }
}

