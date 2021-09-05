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
            ],
            searchTerm: '',
            filter: 'all'
        }
        this.maxId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleFavorite = this.onToggleFavorite.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onSearchUpdate = this.onSearchUpdate.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    //SEARCH POST
    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }
    //update searchterm in main state
    onSearchUpdate(term) {
        this.setState({
            searchTerm: term
        })
    }

    // DELETE POST
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
    //ADD POST
    addItem(body) {
        const newItem = {
            label: body,
            favorite: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {

            const newData = [newItem, ...data];
            
            return {
                data: newData
            }
        })
    }

    //TOGGLE FAVORITE POST
    onToggleFavorite(id, value) {
        this.toggle(id, value);
    }
    //TOGGLE LIKE
    onToggleLike(id, value) {
        this.toggle(id, value);

    }
    //helper for toggle like/favorite
    toggle(id, value) {
        this.setState(({ data }) => {
            //get elem by in data by index
            const index = data.findIndex(item => item.id === id);
            const oldElem = data[index];
            let newElem = '';
            if (value === 'liked') {
                //create new elem with changed like property
                newElem = { ...oldElem, liked: !oldElem.liked }
            } else {
                newElem = { ...oldElem, favorite: !oldElem.favorite }
            }

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
    //FILTER
    filterPosts(items, filterRule) {
        if (filterRule === 'liked') {
            return items.filter(item => item.liked);
        } else {
            return items;
        }
    }
    onFilterSelect(filterRule) {
        this.setState({
            filter: filterRule
        })
    }

    render() {
        //counter for liked posts
        const likedPosts = this.state.data.filter(item => item.liked).length;
        //get all posts length
        const allPosts = this.state.data.length;
        // //get data and searchTerm
        const { data, searchTerm, filter } = this.state;
        // //get visible posts
        const visiblePosts = this.filterPosts(this.searchPost(data, searchTerm), filter);
        return (
            <div className='app'>
                <AppHeader
                    likedPosts={likedPosts}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel onSearchUpdate={this.onSearchUpdate} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    posts={visiblePosts}
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


