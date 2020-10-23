import React from 'react';
import './App.css';

const DAY = 'monday';

function News({header, intro}) {
    return (
        <section>
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
}

function App() {
    const checkDay = () => {
        if(DAY === 'monday') {
            return (
                <div>
                    <h1>Hello React School!</h1>
                    <News header="Header 1" intro="Intro 1" />
                    <News header="Header 2: Breaking news" intro="Intro 2" />
                    <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
                </div>
            );
        }
        else {
            return(
                <div>
                    <h1>Hello React School!</h1>
                    <p>We dont have news from monday.</p>
                </div>
            );
        }
    }
    return (
        <div>
            {checkDay()}
        </div>
    );
}

export default App;
