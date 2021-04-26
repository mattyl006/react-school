import React from 'react';
import posts from './data/posts';
import BlogTile from './components/BlogTile';

function App() {
  return (
    <div className="App">
        <h1>
            React School - Homeworks week II
        </h1>
        <h2>
            Clickbait app
        </h2>
        {
            posts.map((elem) => {
                return (
                    <BlogTile
                        key={`posts-${elem.id}`}
                        header={elem.title}
                        paragraph={elem.intro}
                    />
                );
            })
        }
    </div>
  );
}

export default App;
