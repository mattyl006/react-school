import React, {useState} from 'react';
import './App.css';

const posts = [
    {id: 1, title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
]

const styles = {
    posts: {
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
    },
    uuid: {
        backgroundColor: '#bdc3c7',
        padding: 12,
        margin: 48,
        header: {
            color: '#34495e',
            fontSize: 48,
        },
        id: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#d35400',
        },
        paragraph: {
            fontSize: 18,
            color: '#2c3e50',
        }
    },
    websiteTimer: {
        margin: 32,
        header: {
            fontSize: 48,
        },
        timer: {
            fontSize: 36,
            color: '#27ae60',
        }
    }
}

const MAX_LENGTH = 25;

function BlogTile({title, intro}) {
    if(intro.length > MAX_LENGTH )
        return(
            <article style={styles.posts}>
                <h2 style={styles.posts.header}>{title}</h2>
                <p style={styles.posts.paragraph}>{intro.substring(0, 25)}...</p>
            </article>
        );
    else
        return (
            <article style={styles.posts}>
                <h2 style={styles.posts.header}>{title}</h2>
                <p style={styles.posts.paragraph}>{intro}</p>
            </article>
        );
}

const { v4: uuidv4 } = require('uuid');
const ID = uuidv4();

function UuidGenerate({uuid}) {
    return(
        <section style={styles.uuid}>
            <h2 style={styles.uuid.header}>Uuid version 4 Generator</h2>
            <p style={styles.uuid.id}>{uuid}</p>
            <p style={styles.uuid.paragraph}>Refresh page to generate another id</p>
        </section>
    );
}

class WebsiteTimer extends React.Component {
    state = {
        timer: 0,
    };

    tick() {
        let newTimer = this.state.timer + 1;
        this.setState({timer: newTimer});
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { timer } = this.state;
        return(
            <section style={styles.websiteTimer}>
                <h2 style={styles.websiteTimer.header}>Website Timer</h2>
                <p style={styles.websiteTimer.timer}>{timer}</p>
            </section>
        );
    };
}

function App() {
  return (
      <main className="main">
          <h1 className="main__header">React School - homeworks week 2</h1>
          {posts.map((elem, index) => (
              <BlogTile key={`news-${index}`} title={elem.title} intro={elem.intro} />
          ))}
          <UuidGenerate uuid={ID} />
          <WebsiteTimer />
      </main>
  );
}

export default App;
