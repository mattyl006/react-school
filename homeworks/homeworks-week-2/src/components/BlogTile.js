import React from 'react';

function BlogTile({header, paragraph}) {
    return (
        <article>
            <h3>
                {header}
            </h3>
            <p>
                {paragraph}
            </p>
        </article>
    );
}

export default BlogTile;