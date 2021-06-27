import React from 'react';

class InputClass extends React.Component {
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
        englishViolet: '#4C3B4D',
        honeyDew: '#EDFFEC',
    };

    styles = {
        p: {
            margin: '0 0 32px 0',
        },

        label: {
            paddingRight: 8,
        },

        input: {
            color: this.colors[this.props.color],
            backgroundColor: this.colors[this.props.bgColor],
            borderRadius: this.props.borderRadius,
            border: `solid ${this.props.borderSize} ${this.colors[this.props.borderColor]}`,
        }
    }

    render() {
        return (
            <p style={this.styles.p}>
                <label htmlFor='input' style={this.styles.label}>
                    {this.props.children}
                </label>
                <input style={this.styles.input} id='input' type="text"/>
            </p>
        );
    }
}

export default InputClass;