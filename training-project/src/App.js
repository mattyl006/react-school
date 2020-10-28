import React, {Fragment, useState} from 'react';
import './App.css';

const newsData = [
    {id: 1, author: 'Marcello', title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, author: 'Matchew', title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, author: 'Martin', title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, author: 'Davido', title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
];

const Scoring = ( {score} ) => <p>Ocena: {score}</p>;
const Author = ( {author} ) => <p>Author: {author}</p>;

function News({ header, intro, author }) {
    const [score] = useState(5);

    return (
        <div style={styles}>
            <h2>{header}</h2>
            <p style={styles.p}>{intro}</p>
            <Author author={author} />
            <Scoring score={score} />
        </div>
    );
}

const styles = {
    backgroundColor: '#ecf0f1',
    border: '#95a5a6 1px solid',
    padding: 10,
    p: {
        background: '#f1c40f',
    }
};

function App() {
    return(
        <Fragment>
            <h1>Hello React School!</h1>
            <div>
                {newsData.map((elem) => (
                    <News
                        key={`news-${elem.id}`}
                        header={elem.title}
                        intro={elem.intro}
                        author={elem.author}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default App;
