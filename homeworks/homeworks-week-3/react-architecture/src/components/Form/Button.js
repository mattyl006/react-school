import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({children, bgColor="red", color="blue", icon}) {
    return(
        <button className="button" style={{color: color, backgroundColor: bgColor}}>
             <FontAwesomeIcon icon={icon}/> {children}
        </button>
    );
}

export default Button;
