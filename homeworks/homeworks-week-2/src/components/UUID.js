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
    const [id, setId] = React.useState(uuidv4());
    const handleClick = () => setId(uuidv4());
    return (
        <>
            <p style={styles}>
                Your Version 4 UUID:&nbsp;
                <span style={styles.span}>
                {id}
            </span>
            </p>
            <button style={{margin: '16px 0 0 0'}} onClick={handleClick}>
                Generate next
            </button>
        </>
    );
}

export default UUID;