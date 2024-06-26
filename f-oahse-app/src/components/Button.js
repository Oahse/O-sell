import {React, Link} from './all_imports';
import styles from './Button.css';

function Btn(props) {
    const { to, state, text, onClick, className, style } = props; // Destructure props to extract specific values

    return (
        <Link to={to} state={state} onClick={onClick} variant='warning' className={`btn ${styles.btn} ${className}`} style={style}>
            {text}
        </Link>
    );
}
export default Btn;