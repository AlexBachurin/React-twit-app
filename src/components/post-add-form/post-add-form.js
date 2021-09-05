import React, { Component } from "react";
import './post-add-form.css'


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //watch useinputs
    onValueChange(e) {
        this.setState(({ userInput }) => {
            return {
                userInput: e.target.value
            }
        })
        console.log(this.state.userInput);
    }
    //submite handler
    onSubmit(e) {
        //prevent page reload
        e.preventDefault();
        //take function to add more posts from props
        const { onAdd } = this.props;
        //add current imput
        onAdd(this.state.userInput);
        //and clear it
        this.setState({
            userInput: ''
        })
    }

    render() {

        return (
            <form onSubmit={this.onSubmit} className='bottom-panel d-flex'>
                <input onChange={this.onValueChange} className='form-control new-post-label' type="text" placeholder='что хотите добавить?'
                    value={this.state.userInput}
                />
                <button type='submit' className='btn btn-outline-secondary'>Добавить</button>
            </form>
        )
    }
}
