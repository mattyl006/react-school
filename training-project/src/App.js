import React from 'react';
import './App.css';

function News({header, intro}) { // dane przekazywane do funkcji w postaci json to tak zwany "props"
    return (
        <section>
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
} /* za pomocą klamerek {} bindujemy jakieś dynamiczne wartości, bez nich dostaniemy normalny
łańcuch string */

function App() {
    return (
        <div>
            <h1>Hello React School!</h1>
            <News header="Header 1" intro="Intro 1" />
            <News header="Header 2: Breaking news" intro="Intro 2" />
            <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}

export default App;
