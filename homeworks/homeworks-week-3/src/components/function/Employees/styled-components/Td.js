import styled from 'styled-components';

const Td = styled.td`
  margin: 0;
  padding: 8px;
  border: 1px solid #000;
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  text-align: center;
`;

export default Td;