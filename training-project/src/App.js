import React, {Fragment} from 'react';
import './App.css';

const DAY = 'monday';

function News({header, intro}) {
    return (
        <section className="News">
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
}

function App() {
    const checkDay = () => {
        if(DAY === 'monday') {
            return (
                <Fragment>
                    <h1>Hello React School!</h1>
                    <News header="Header 1" intro="Intro 1" />
                    <News header="Header 2: Breaking news" intro="Intro 2" />
                    <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
                </Fragment>
            );
        }
        else {
            return(
                <Fragment>
                    <h1>Hello React School!</h1>
                    <p>We dont have news from monday.</p>
                </Fragment>
            );
        }
    };
    return (
        <div>
            {checkDay()}
        </div>
    );
}

export default App;
