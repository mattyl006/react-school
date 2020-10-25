import React, {Fragment} from 'react';
import './App.css';

const DAY = 'monday';

// function News({header, intro}) {
//     return (
//         <section style={styles}>
//             <h2>{header}</h2>
//             <p style={styles.p}>{intro}</p>
//         </section>
//     );
// }

class News extends React.Component {

    state = {
        date: new Date(),
        score: 5
    };

    componentDidMount() { // Ta metoda odbywa się gdy komponent zostanie zamontowany
        this.setState({ score: 6 });
    }

    render() {
        const { header, intro } = this.props;
        const { score } = this.state;
        return(
            <div style={styles}>
                <h2>{header}</h2>
                <p style={styles.p}>{intro}</p>
                <p>{score}</p>
            </div>
        );
    }
}

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
