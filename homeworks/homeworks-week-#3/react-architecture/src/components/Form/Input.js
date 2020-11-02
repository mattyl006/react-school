import React from 'react';

function Input({bgColor="blue", color="green", borderSize, borderRadius, borderColor}) {
    return (
        <input className="input" type="text" defaultValue="input" style={{
            backgroudColor: bgColor,
            color: color,
            borderColor: borderColor,
            borderSize: borderSize,
            borderRadius: borderRadius,
        }}/>
    );
}

export default Input;
