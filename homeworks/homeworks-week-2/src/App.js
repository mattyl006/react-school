import React from 'react';
import posts from './data/posts';
import BlogTile from './components/BlogTile';
import UUID from './components/UUID';
import Timer from './components/Timer';

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
    },
    section: {
        marginBottom: '64px',
    },
};

function App() {
  return (
    <div className="App">
        <h1 style={styles.h1}>
            React School - Homeworks week II
        </h1>
        <section style={styles.section}>
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
        </section>
        <section style={styles.section}>
            <h2 style={styles.h2}>
                UUID Generator
            </h2>
            <UUID />
        </section>
        <section>
            <h2 style={styles.h2}>
                Timer
            </h2>
            <Timer />
        </section>
    </div>
  );
}

export default App;
