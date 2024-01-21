import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ href, onClick, text, icon, iconsize, className, borderRadius }) => {
  var borderadius = '50px';
  if (borderRadius){
    borderadius = borderRadius
  }
  return (
    <div className="d-flex align-items-center">
      <Button href={href} onClick={onClick} variant='warning' className={className} style={{borderRadius:borderadius}}>
        {text}
        {icon && (
        <span className="m-0">
          <FontAwesomeIcon icon={icon} size={iconsize} onClick={onClick} className={`icon ${className} mb-0 ms-2 mr-0`}/>
        </span>
      )}
      </Button>
    </div>
  );
};

export default IconButton;
