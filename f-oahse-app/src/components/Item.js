import Icon from './Icon';
import { Button, React, FontAwesomeIcon, Link} from './all_imports';

import styles from './Item.css';

function Item(props) {
    const { to, id,lefticonname,righticonname, iconcolor,text, onClick, className} = props; // Destructure props to extract specific values
    const _class = `${className} d-flex align-items-center link-dark  m-1 p-0`; // Add a default className if one is not provided
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif'
    };
    const Id =`${id}-caret`;

    return (
        <Link to={to}  id={id} variant='warning' onClick={onClick} className={`btn ${styles.item} ${_class}`} style={linkstyles}>
            <Icon name={lefticonname} color={iconcolor} />
            <span className='m-1 mt-0 mb-0'>{text}</span>
            <Icon id={Id} name={righticonname} color={iconcolor} className="ms-auto"/> 
        </Link>
    );
}
export default Item;