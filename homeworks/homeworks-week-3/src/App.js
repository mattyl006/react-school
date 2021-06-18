import React from 'react';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';

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
        display: 'flex',
        flexDirection: 'column'
    },
};

function App() {
  return (
    <div className="App">
        <h1 style={styles.h1}>
            React School - Homeworks Week III
        </h1>
        <section style={styles.section}>
            <h2 style={styles.h2}>
                Modifiable Button
            </h2>
            <Button color='silver' bgColor='midnightBlue'>
                Click me
            </Button>
            <ButtonClass color='englishViolet'>
                Click me (class version)
            </ButtonClass>
        </section>
    </div>
  );
}

export default App;
