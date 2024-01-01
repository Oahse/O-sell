import { Container,Navbar, Nav, Button  } from 'react-bootstrap';
import Icon from './Icon';
import styles from './Item.css';

function Item(props) {
    const { id,lefticonname,righticonname, iconcolor,text, onClick, className} = props; // Destructure props to extract specific values
    const _class = `${className} d-flex align-items-center link-dark  m-1 p-0`; // Add a default className if one is not provided
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif'
    };
    const Id =`${id}-caret`;

    return (
        <Button variant='warning' onClick={onClick} className={`${styles.item} ${_class}`} style={linkstyles}>
            <Icon name={lefticonname} color={iconcolor} />
            {text} 
            <Icon id={Id} name={righticonname} color={iconcolor} col="ms-auto"/> 
        </Button>
    );
}
export default Item;