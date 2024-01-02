
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Icon.css';

function Icon(props) {
    const {id,name, onClick, size, className, color} =props;
    const iconStyles ={'--icon-color':'#ffc107',
                        '--icon-hover-color':'#d39e00',
                        '--icon-active-color':'whitesmoke'
                        };
    const Size = size || 'lg';//["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]
    const ClassName = className || '';
    if (color){
        if (color==="danger"){
            iconStyles['--icon-color']='#ffc107'
            iconStyles['--icon-hover-color'] = '#d39e00';
            iconStyles['--icon-active-color'] = 'whitesmoke';
        }
        if (color==="success"){
            iconStyles['--icon-color']='#ffc107'
            iconStyles['--icon-hover-color'] = '#d39e00';
            iconStyles['--icon-active-color'] = 'whitesmoke';
        }
        if (color==="primary"){
            iconStyles['--icon-color']='#ffc107'
            iconStyles['--icon-hover-color'] = '#d39e00';
            iconStyles['--icon-active-color'] = 'whitesmoke';
        }
        if (color==="dark"){
            iconStyles['--icon-color']='black'
            iconStyles['--icon-hover-color'] = 'black';
            iconStyles['--icon-active-color'] = 'black';
        }
    }
  return (
    <FontAwesomeIcon id={id} icon={name} onClick={onClick} size = {Size} className={`${styles.icon} icon ${ClassName}`} style={iconStyles}/>
  );
}

export default Icon;
