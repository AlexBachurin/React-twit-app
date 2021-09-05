import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        this.onSearchUpdate = this.onSearchUpdate.bind(this);
    }
    //get value from search and store it into state
    onSearchUpdate(e) {
        const term = e.target.value;
        this.setState({
            searchTerm: term
        })
        //call function from props to update state in main app
        this.props.onSearchUpdate(term);
    }
    render() {
        return (
            <input
                className="form-control search-input"
                type='text'
                placeholder='Поиск по записям'
                onChange={this.onSearchUpdate}
            />
        )
    }
}
