import styled from 'styled-components';

const colors = {
    midnightBlue: '#2c3e50',
    asbestos: '#7f8c8d',
    greenSea: '#16a085',
    silver: '#bdc3c7',
    amethyst: '#9b59b6',
    englishViolet: '#4C3B4D'
};

const Button = styled.button`
  color: ${colors[({color}) => color]};
  background-color: ${colors[({bgColor}) => bgColor]};
  width: 200px;
  height: 64px;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 0;
  padding: 8px;
`;

export default Button;