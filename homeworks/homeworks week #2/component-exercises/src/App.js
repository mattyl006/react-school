import React, {Fragment, useState} from 'react';
import './App.css';

const posts = [
    {id: 1, title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
]

const styles = {
    backgroundColor: '#9b59b6',
    border: '#95a5a6 1px solid',
    padding: 12,
    marginBottom: 32,
    header: {
        color: '#f39c12',
        fontSize: 48,
    },
    paragraph: {
        background: '#16a085',
        fontSize: 18,
        color: '#2c3e50',
    },
}

const MAX_LENGTH = 25;

function BlogTile({title, intro}) {
    if(intro.length > MAX_LENGTH )
        return(
            <article style={styles}>
                <h2 style={styles.header}>{title}</h2>
                <p style={styles.paragraph}>{intro.substring(0, 25)}...</p>
            </article>
        );
    else
        return (
            <article style={styles}>
                <h2 style={styles.header}>{title}</h2>
                <p style={styles.paragraph}>{intro}</p>
            </article>
        );
}

function App() {
  return (
      <main className="main">
          <h1 className="main__header">React School - homeworks week 2</h1>
          {posts.map((elem, index) => (
              <BlogTile key={`news-${index}`} title={elem.title} intro={elem.intro} />
          ))}
      </main>
  );
}

export default App;
