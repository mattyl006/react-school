import React from 'react';

function Button({children, color = 'asbestos', bgColor = 'silver'}) {

    const colors = {
        midnightBlue: '#2c3e50',
        asbestos: '#7f8c8d',
        greenSea: '#16a085',
        silver: '#bdc3c7',
        amethyst: '#9b59b6',
        englishViolet: '#4C3B4D'
    };

    const styles = {
        color: colors[color],
        backgroundColor: colors[bgColor],
        width: 200,
        height: 64,
        borderRadius: 12,
        marginBottom: 32,
    };

    return (
        <button style={styles}>
            {children}
        </button>
    );
}

export default Button;