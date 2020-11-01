import React from 'react';

function Textarea({bgColor="blue", color="green", borderSize, borderRadius, borderColor}) {
    return(
        <textarea defaultValue="text text text" className="textarea" style={{
            backgroudColor: bgColor,
            color: color,
            borderColor: borderColor,
            borderSize: borderSize,
            borderRadius: borderRadius,
        }}>
        </textarea>
    );
}

export default Textarea;
