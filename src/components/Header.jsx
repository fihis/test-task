import React from 'react';

export const Header = ({ filter, changeFilter, filterTable}) => {

    const handleChangeFilter = event => {
        changeFilter(event.target.value);
    }

    const handleFilterTable = () => {
        filterTable();
    }

    return (
        <header>
            <div className = 'wrapper'>
                <img className = 'burger-menu' src={require('../assets/menu.png')} alt='Menu button' />
                <div className = 'page-title'>
                    <h2>Users List</h2>
                    <span>874 users</span>
                </div>
            </div>
            <div className = 'wrapper'>
                <div className = 'search-bar'>
                    <img src={require('../assets/search.png')} alt='Search' />
                    <input type='search' placeholder='Search' name='search' id='search' value={filter} onChange={handleChangeFilter}/>
                </div>
                <button className = 'table-filter' onClick={handleFilterTable}>Table Filter</button>
            </div>
            <div className = 'user-menu'>
                <span className = 'current-user'>Dale McCornick</span>
                <img src={require('../assets/user-menu.png')} alt='User Menu' />
            </div>
        </header>
    )
}