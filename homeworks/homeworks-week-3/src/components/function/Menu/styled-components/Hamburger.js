import styled from 'styled-components';

const Hamburger = styled.button`
  display: inline-block;
  position: fixed;
  top: 10px;
  right: 12px;
  border: none;
  padding: 4px;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  z-index: 3;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Box = styled.div`
  width: 18px;
  height: 12px;
  display: inline-block;
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(white, 0.9);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .3s .1s ease-in-out;

  &::before, &::after {
    width: 100%;
    height: 2px;
    background-color: rgba(white, 0.9);
    position: absolute;
    content: "";
    left: 0;
    transition: transform .3s ease-in-out;
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`;

export default Hamburger;