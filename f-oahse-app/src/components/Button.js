import { Container,Navbar, Nav, Button  } from 'react-bootstrap';
import styles from './Button.css';
function Btn(props) {
    const { href,text, onClick, className, style} = props; // Destructure props to extract specific values

    return (
        <Button href={href} onClick={onClick} variant='warning' className={`${styles.btn} ${className}`} style={style}>
            {text}
        </Button>
    );
}
export default Btn;