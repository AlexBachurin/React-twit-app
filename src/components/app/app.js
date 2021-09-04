import React from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';



const App = () => {
    const data = [
        {label: 'Want to learn react', important: true, id: 'qqweqe'},
        {label: 'Wanna play tennis', important: false, id: 'wewq12ewq'},
        {label: 'Gotta sleep', important: false, id: 'sadas12asa'}
    ]
    return (
        <div className='app'>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;