import React from 'react';
import posts from './data/posts';
import BlogTile from './components/BlogTile';

const styles = {
    h1: {
        margin: '0 0 64px 0',
        fontSize: '48px',
        fontFamily: 'Montserrat Alternates, sans-serif',
    },
    h2: {
        margin: '0 0 48px 0',
        fontSize: '36px',
        fontFamily: 'Montserrat Alternates, sans-serif',
    }
};

function App() {
  return (
    <div className="App">
        <h1 style={styles.h1}>
            React School - Homeworks week II
        </h1>
        <h2 style={styles.h2}>
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
