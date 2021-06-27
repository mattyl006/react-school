import React from 'react';

class ButtonClass extends React.Component {

    static defaultProps = {
        color: 'asbestos',
        bgColor: 'silver'
    }

    colors = {
        midnightBlue: '#2c3e50',
        asbestos: '#7f8c8d',
        greenSea: '#16a085',
        silver: '#bdc3c7',
        amethyst: '#9b59b6',
        englishViolet: '#4C3B4D'
    };

    styles = {
        color: this.colors[this.props.color],
        backgroundColor: this.colors[this.props.bgColor],
        width: 200,
        height: 64,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 0,
        padding: 8,
    };

    render() {
        return (
            <button style={this.styles}>
                {this.props.children}
            </button>
        );
    }
}

export default ButtonClass;