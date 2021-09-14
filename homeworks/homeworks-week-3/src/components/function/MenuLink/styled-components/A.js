import styled from 'styled-components';

const A = styled.a`
  color: ${({isActive}) => isActive ? 'red' : 'blue'};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 20% 0 20% 16px;
  display: block;
`;

export default A;