import React, {Fragment, useState} from 'react';
import './App.css';

const posts = [
    {id: 1, title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
]

function BlogTile({title, intro}) {
    return(
        <article>
            <h2>{title}</h2>
            <p>{intro}</p>
        </article>
    );
}

function App() {
  return (
      <main className="main">
          <h1>React School - homeworks week 2</h1>
          {posts.map((elem, index) => (
              <BlogTile key={`news-${index}`} title={elem.title} intro={elem.intro} />
          ))}
      </main>
  );
}

export default App;
