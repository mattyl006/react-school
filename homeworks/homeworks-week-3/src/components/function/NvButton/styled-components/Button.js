import styled from 'styled-components';
import hamburgerMenu from '../../../../assets/hamburger-menu.svg';

const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  width: 20px;
  height: 16px;
  border: none;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${hamburgerMenu});
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 3;
`;

export default Button;