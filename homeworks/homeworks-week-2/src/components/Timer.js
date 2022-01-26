import React from 'react';

const styles = {
    fontSize: '24px',
    margin: '0',
    color: '#666',
    fontWeight: '400',
};

// function Timer() {
//     const [timer, setTimer] = React.useState(0);
//
//     function tick() {
//         let newTimer = timer + 1;
//         setTimer(newTimer);
//     }
//
//     let timerID = 0;
//     React.useEffect(() => {
//         timerID = setInterval(tick, 1000);
//         return () => {
//             clearInterval(timerID);
//         };
//     });
//
//     return (
//         <p style={styles}>
//             {timer}
//         </p>
//     );
// }

class Timer extends React.Component {

    state = {
        timer: 0,
    };

    tick() {
        let newTimer = this.state.timer + 1;
        this.setState({timer: newTimer});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const {timer} = this.state;

        return (
            <p style={styles}>
                 {timer}
            </p>
        );
    }
}

export default Timer;