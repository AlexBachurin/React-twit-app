import React, { Component } from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: 'Want to learn react', important: true, id: 'qqweqe' },
                { label: 'Wanna play tennis', important: false, id: 'wewq12ewq' },
                { label: 'Gotta sleep', important: false, id: 'sadas12asa' }
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            //find which element in array we need to delete
            const index = data.findIndex((item) => {
                return item.id = id;
            })
        //create two new arrays excluding item that we need to delete
        //bcz we cant mutate state data
            const beforeArr = data.slice(0, index);
            const afterArr = data.slice(index + 1);
            return {
                data: [...beforeArr, ...afterArr]
            }
        })

    }
    addItem(body) {
        // this.setState(({data}) => {
        //     const newItem = {
        //         label: body,
        //         important: false,
        //         id: 'qzzzqe'
        //     }
        //     const newData = [newItem, ...data];

        //     return {
        //         data: newData
        //     }
        // })
        console.log('added')
    }

    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    posts={this.state.data} />
                <PostAddForm 
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}


