
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Icon.css';

function Icon(props) {
    const {to,id,name, onClick, size, className, color} =props;
    const iconStyles ={'--icon-color':'#ffc107',
                        '--icon-hover-color':'#d39e00',
                        '--icon-active-color':'whitesmoke'
                        };
    const Size = size || 'lg';//["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]
    const ClassName = className || '';
    if (color){
        if (color === "danger") {
            // For color 'danger'
            iconStyles['--icon-color'] = '#dc3545'; // Red color code for 'danger'
            iconStyles['--icon-hover-color'] = '#bd2130'; // Darker red for hover color
            iconStyles['--icon-active-color'] = 'whitesmoke'; // Light gray for active color
        } else if (color === "success") {
            // For color 'success'
            iconStyles['--icon-color'] = '#28a745'; // Green color code for 'success'
            iconStyles['--icon-hover-color'] = '#218838'; // Darker green for hover color
            iconStyles['--icon-active-color'] = 'whitesmoke'; // Light gray for active color
        } else if (color === "primary") {
            // For color 'primary'
            iconStyles['--icon-color'] = '#007bff'; // Blue color code for 'primary'
            iconStyles['--icon-hover-color'] = '#0056b3'; // Darker blue for hover color
            iconStyles['--icon-active-color'] = 'whitesmoke';
        } else if (color === "warning") {
            // For color 'warning'
            iconStyles['--icon-color'] = '#ffc107'; // Yellow color code for 'warning'
            iconStyles['--icon-hover-color'] = '#d39e00'; // Darker yellow for hover color
            iconStyles['--icon-active-color'] = '#212529'; // Black for active color
        } else if (color === "dark"||color==='black') {
            // For color 'dark'
            iconStyles['--icon-color'] = '#343a40'; // Dark gray color code for 'dark'
            iconStyles['--icon-hover-color'] = '#1d2124'; // Darker gray for hover color
            iconStyles['--icon-active-color'] = 'whitesmoke'; // Light gray for active color
        } else if (color === "light"||color ==='white') {
            // For color 'light'
            iconStyles['--icon-color'] = 'white'; // Light gray color code for 'light'
            iconStyles['--icon-hover-color'] = '#dae0e5'; // Lighter gray for hover color
            iconStyles['--icon-active-color'] = '#212529'; // Black for active color
        }
    }
  return (
    <FontAwesomeIcon to={to} id={id} icon={name} onClick={onClick} size = {Size} className={`${styles.icon} icon ${ClassName}`} style={iconStyles}/>
  );
}

export default Icon;
