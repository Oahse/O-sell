import Icon from "./Icon";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Search.css';
const SearchBar= (props) => {
    const {style, formwidth, placeholder, className} =props;
    return(
        <div className={`search-icon ms-1 p-0 ${className}`} style={style}>
            <div class="d-flex form-inputs" >
                <input class="form-control" type="text" placeholder={placeholder}/>
                <Icon name={faSearch} color='dark' className="icon"/>
            </div>
        </div>
    )
}
export default SearchBar;