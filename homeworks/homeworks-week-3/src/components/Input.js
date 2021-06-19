import React from 'react';

function Input(props) {

    const styles = {
        p: {
            margin: '0 0 32px 0',
        },

        label: {
            paddingRight: 8,
        }
    };

    return (
        <p style={styles.p}>
            <label style={styles.label}> 
                {props.children}
            </label>
            <input type="text"/>
        </p>
    );
} 

export default Input;