import styled from 'styled-components';

const More = styled.div`
  padding: 0 16px;
  transition: height 0.5s ease-in-out;
  height: ${({showMore}) => showMore ? '736px' : '0'};
`;

export default More;