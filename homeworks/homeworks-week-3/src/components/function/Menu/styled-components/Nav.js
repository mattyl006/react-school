import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  padding: 16px;
  top: 0;
  left: 0;
  width: 20%;
  min-width: 224px;
  height: 150vh;
  background-color: rgba(240, 248, 255, 0.95);
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({menuDisplay}) => menuDisplay ? '0' : '-100%'});
`;

export default Nav;