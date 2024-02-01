import { React, useState, faSearch, faList} from './all_imports';
import DropDown from './DropDown';
import Icon from './Icon';
import './Search.css';

const Search = (props) => {
    const { items,islist, onClick,onKeyDown, value, filteroptions, onSelect } = props;
    const [searchText, setSearchText] = useState(value || ''); // Set initial state from prop
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchText(newValue);
    };

    const handleSearchClick = () => {
        onClick(searchText);
        onKeyDown(searchText);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Trigger search action when Enter key is pressed
          onKeyDown(searchText);
        }
    };

    function handleFilter(){
        setIsOpen(!isOpen);
    }
    
    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false); // Close the dropdown after selection
    };
    return (
        <div className="search-bar">
            <div className="dropdown-container  bg-warning">
                <DropDown items={items} />
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress} // Listen for Enter key press
                className="search-input"
            />
            
            <div className="search-icon-container">
                <Icon name={faSearch} onClick={handleSearchClick} color='black'/>
                {islist?
                (
                    <span className='dropdown '>
                        <Icon name={faList} onClick={handleFilter} color='black' className="dropdown-toggle" />
                        {isOpen && (
                        <div className="dropdown-menu" style={{zIndex:1000}}>
                            {filteroptions.map((option, index) => (
                            <div key={index} className="dropdown-item" onClick={() => handleSelect(option)}>
                                {option}
                            </div>
                            ))}
                        </div>
                        )}
                    </span>
                    
                ) 
                : (<></>)}
            </div>
        </div>
    );
}

export default Search;
