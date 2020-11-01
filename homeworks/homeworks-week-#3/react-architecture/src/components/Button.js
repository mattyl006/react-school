import React from 'react';

function Button({children, bgColor, color}) {
    return(
        <button className="button" style={{color: color, backgroundColor: bgColor}} backgroudColor={bgColor}>{children}</button>
    );
}

export default Button;
