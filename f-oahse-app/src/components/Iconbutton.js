import { Button, React, FontAwesomeIcon, Link } from './all_imports';

const IconButton = ({ href,to, onClick, text, icon, iconsize, className, borderRadius,disabled }) => {
  var borderadius = '50px';
  if (borderRadius){
    borderadius = borderRadius
  }
  const ButtonComponent = to ? Link : Button;

  return (
    <div className="d-flex align-items-center">
      <ButtonComponent href={href} onClick={onClick} variant='warning' className={`btn ${className}`} style={{borderRadius:borderadius}} disabled={disabled}>
        {text}
        {icon && (
            <span className="m-0">
              <FontAwesomeIcon icon={icon} size={iconsize} onClick={onClick} className={`icon ${className} mb-0 ms-2 mr-0`} disabled={disabled}/>
            </span>
          )}
      </ButtonComponent>
    </div>
  );
};

export default IconButton;
