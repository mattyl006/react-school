import React from 'react';

function Textarea(props) {

    const colors = {
        midnightBlue: '#2c3e50',
        asbestos: '#7f8c8d',
        greenSea: '#16a085',
        silver: '#bdc3c7',
        amethyst: '#9b59b6',
        englishViolet: '#4C3B4D',
        honeyDew: '#EDFFEC',
    };

    const styles = {
        color: colors[props.color],
        backgroundColor: colors[props.bgColor],
        borderRadius: props.borderRadius,
        border: `solid ${props.borderSize} ${colors[props.borderColor]}`,
        width: '80%',
        fontSize: 16,
        padding: 12,
        marginBottom: 32,
    };

    return (
        <textarea style={styles} defaultValue={props.children}>
        </textarea>
    );
}

Textarea.defaultProps = {
    color: 'honeyDew', 
    bgColor: 'greenSea', 
    borderSize: 2, 
    borderRadius: 0, 
    borderColor: 'transparent',
};

export default Textarea;