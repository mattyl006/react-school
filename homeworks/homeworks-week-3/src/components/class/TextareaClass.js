import React from 'react';

class TextareaClass extends React.Component {

    static defaultProps = {
        color: 'englishViolet',
        bgColor: 'silver',
        borderRadius: 0,
        borderSize: 2,
        borderColor: 'midnightBlue'
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
        borderRadius: this.props.borderRadius,
        border: `solid ${this.props.borderSize} ${this.colors[this.props.borderColor]}`,
        width: '80%',
        fontSize: 16,
        padding: 12,
        marginBottom: 32,
    };

    render() {
        return (
            <textarea style={this.styles} defaultValue={this.props.children}>
            </textarea>
        );
    }
}

export default TextareaClass;