import React, {Fragment, useState} from 'react';
import './App.css';

const DAY = 'monday';

function News({ header, intro }) {
    const [score, setScore] = useState(5);
    // setScore(10);
    /* zmienia wartość score na 10, ale nie można robić tego w tym miejscu, bo
    wtedy za każdym razem nasz komponent zacznie się renderować, to będzie błąd */
    return (
        <div style={styles}>
            <h2>{header}</h2>
            <p style={styles.p}>{intro}</p>
            <p>{score}</p>
        </div>
    )
}
// class News extends React.Component {
//
//     state = {
//         date: new Date(),
//         score: 5
//     };
//
//     componentDidMount() {
//         let loading = true;
//         this.setState({ score: 6 }, () => {
//             loading = false;
//         });
//     }
//
//     render() {
//         const { header, intro } = this.props;
//         const { score } = this.state;
//         return(
//             <div style={styles}>
//                 <h2>{header}</h2>
//                 <p style={styles.p}>{intro}</p>
//                 <p>{score}</p>
//             </div>
//         );
//     }
// }

const styles = {
    backgroundColor: '#ecf0f1', // nazwy musimy pisać cammel case'em
    border: '#95a5a6 1px solid',
    padding: 10, // nie musimy podawać px, sam number wystarczy w przypadku js
    p: {
        background: '#f1c40f',
    }
};

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
