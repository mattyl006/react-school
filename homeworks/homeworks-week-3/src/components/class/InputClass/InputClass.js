import React from 'react';
import P from './styled-components/P';
import Label from './styled-components/Label';

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
            <P>
                <Label htmlFor='input'>
                    {this.props.children}
                </Label>
                <input style={this.styles.input} id='input' type="text"/>
            </P>
        );
    }
}

export default InputClass;