import React from 'react';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';
import Input from './components/Input';
import Textarea from './components/Textarea';
import TextareaClass from './components/TextareaClass';

function App() {

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
                    Click me (class ver.)
                </ButtonClass>
            </section>
            <section style={styles.section}>
                <h2 style={styles.h2}>
                    Input and Textarea
                </h2>
                <Input>
                    Input
                </Input>
                <Textarea borderSize='4px' borderRadius='8px' borderColor='silver'>
                    Textarea text.
                </Textarea>
                <TextareaClass color='silver' bgColor='midnightBlue' 
                               borderSize='4px' borderRadius='8px' borderColor='asbestos'>
                    Class Textarea text.
                </TextareaClass>
            </section>
        </div>
    );
}

export default App;