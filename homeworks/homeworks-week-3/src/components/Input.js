import React from 'react';

function Input(props) {

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
        p: {
            margin: '0 0 32px 0',
        },

        label: {
            paddingRight: 8,
        },

        input: {
            color: colors[props.color],
            backgroundColor: colors[props.bgColor],
            borderRadius: props.borderRadius,
            border: `solid ${props.borderSize} ${colors[props.borderColor]}`,
        }
    };

    return (
        <p style={styles.p}>
            <label htmlFor='input' style={styles.label}>
                {props.children}
            </label>
            <input style={styles.input} id='input' type="text"/>
        </p>
    );
} 

export default Input;