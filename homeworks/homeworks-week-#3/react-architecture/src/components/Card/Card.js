import React from 'react';
import './Card.scss';

const showingMore = (describe, showMore) => {
    if(showMore) {
        return describe;
    }
    return (describe.substring(0, 56) + '...');
};

function Card({header, date, photo, describe, showMore}) {
    return (
        <article className="Card">
            <h2 className="Card__header">{header}</h2>
            <p className="Card__date">{date}</p>
            <img className="Card__photo" src={photo} alt="Kurczak curry"/>
            <p className="Card__describe">{showingMore(describe, showMore)}</p>
        </article>
    );
}

export default Card;
