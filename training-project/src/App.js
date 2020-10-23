import React from 'react';
import './App.css';

function News() {
    return (
        <section>
            <h2>Header</h2>
            <p>Intro</p>
        </section>
    );
} // Ostatnio taki zapis funkcyjny jest bardziej popularny

function App() {
    return (
        <div>
            <h1>Hello React School!</h1>
            <News h2="Header 1" p="Intro 1" />
            <News h2="Header 2: Breaking news" p="Intro 2" />
            <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}

export default App;
