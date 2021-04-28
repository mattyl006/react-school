import React from 'react';

function Button({children, color, bgColor}) {

    const colors = {
        midnightBlue: '#2c3e50',
        asbestos: '#7f8c8d',
        greenSea: '#16a085',
        silver: '#bdc3c7',
        amethyst: '#9b59b6',
    };

    const styles = {
        color: colors[color],
        backgroundColor: colors[bgColor],
        width: 200,
        height: 64,
        borderRadius: 12,
    };

    return (
        <button style={styles}>
            {children}
        </button>
    );
}

export default Button;