import React from 'react';

const styles = {
    marginBottom: '32px',
    header: {
        margin: '0 0 24px 0',
        fontSize: '24px',
        fontFamily: 'Montserrat Alternates, sans-serif',
    },
    paragraph: {
        margin: '0',
        fontSize: '16px',
    }
};

function sliceHandler(paragraph) {
    if(paragraph.length > 60) {
        return `${paragraph.slice(0, 60)}...`;
    }
    return paragraph;
}

function BlogTile({header, paragraph}) {
    return (
        <article style={styles}>
            <h3 style={styles.header}>
                {header}
            </h3>
            <p style={styles.paragraph}>
                {sliceHandler(paragraph)}
            </p>
        </article>
    );
}

export default BlogTile;