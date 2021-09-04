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
                { label: 'Want to learn react', favorite: true, liked: false, id: 'qqweqe' },
                { label: 'Wanna play tennis', favorite: false, liked: false, id: 'wewq12ewq' },
                { label: 'Gotta sleep', favorite: false, liked: false, id: 'sadas12asa' }
            ]
        }
        this.maxId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleFavorite = this.onToggleFavorite.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
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
        const newItem = {
            label: body,
            favorite: false,
            id: this.maxId++
        }
        this.setState(({data}) => {

            const newData = [newItem, ...data];

            return {
                data: newData
            }
        })
    }

    onToggleFavorite(id) {
        this.setState(({ data }) => {
            //get elem by in data by index
            const index = data.findIndex(item => item.id === id);
            const oldElem = data[index];
            //create new elem with changed like property
            const newElem = {...oldElem, favorite : !oldElem.favorite}
            //create new array to not mutate array and add changed property into newly
            //created arr
            const beforeArr = data.slice(0, index);
            const afterArr = data.slice(index + 1);
            const newArr = [...beforeArr, newElem, ...afterArr];
            //change state
            return {
                data: newArr
            }

        })
    }
    onToggleLike(id) {
        this.setState(({ data }) => {
            //get elem by in data by index
            const index = data.findIndex(item => item.id === id);
            const oldElem = data[index];
            //create new elem with changed like property
            const newElem = {...oldElem, liked : !oldElem.liked}
            //create new array to not mutate array and add changed property into newly
            //created arr
            const beforeArr = data.slice(0, index);
            const afterArr = data.slice(index + 1);
            const newArr = [...beforeArr, newElem, ...afterArr];
            //change state
            return {
                data: newArr
            }

        })
        console.log(`like ${id}`)
    }

    render() {
        //counter for liked posts
        const likedPosts = this.state.data.filter(item => item.liked).length;
        //get all posts length
        const allPosts = this.state.data.length;
        return (
            <div className='app'>
                <AppHeader 
                    likedPosts={likedPosts}
                    allPosts={allPosts}
                 />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    posts={this.state.data}
                    onToggleFavorite={this.onToggleFavorite}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}


