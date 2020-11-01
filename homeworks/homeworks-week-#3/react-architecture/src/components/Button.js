import React from 'react';

function Button({label, bgColor, color}) {
    return(
        <button className="button" style={{color: color, backgroundColor: bgColor}} backgroudColor={bgColor}>{label}</button>
    );
}

export default Button;
