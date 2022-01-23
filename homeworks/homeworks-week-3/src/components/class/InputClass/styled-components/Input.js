import styled from 'styled-components';

// color: this.colors[this.props.color],
//     backgroundColor: this.colors[this.props.bgColor],
//     borderRadius: this.props.borderRadius,
//     border: `solid ${this.props.borderSize} ${this.colors[this.props.borderColor]}

const colors = {
    midnightBlue: '#2c3e50',
    asbestos: '#7f8c8d',
    greenSea: '#16a085',
    silver: '#bdc3c7',
    amethyst: '#9b59b6',
    englishViolet: '#4C3B4D',
    honeyDew: '#EDFFEC',
};

const Input = styled.input`
  color: ${colors[({color}) => color]}
`;

export default Input;