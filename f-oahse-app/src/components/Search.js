import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import DropDown from './DropDown';
import Icon from './Icon';

const Search = (props) => {
    const { items } = props;
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement your search functionality here using searchQuery
        console.log('Search query:', searchQuery);
    };

    return (
        <div className="search-bar">
            <div className="dropdown-container  bg-warning">
                <DropDown text="Categories" items={items} />
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="search-input"
            />
            
            <div className="search-icon-container">
                <Icon name={faSearch} onClick={handleSearch} color='black'/>
            </div>
        </div>
    );
}

export default Search;
