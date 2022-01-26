import React from 'react';
import {v4 as uuidv4} from 'uuid';

const styles = {
    fontSize: '20px',
    margin: '0',
    span: {
        color: '#666',
        fontWeight: '500',
        fontSize: '24px',
    }
};

function UUID() {
    return (
        <p style={styles}>
            Your Version 4 UUID:&nbsp;
            <span style={styles.span}>
                {uuidv4()}
            </span>
        </p>
    );
}

export default UUID;