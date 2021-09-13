import styled from 'styled-components';

const More = styled.div`
  padding: 0 16px;
  transition: height 0.5s ease-in-out, margin 0.6s ease-in-out;
  height: ${({showMore}) => showMore ? '736px' : '0'};
  margin: ${({showMore}) => showMore ? '112px 0 16px 0' : '76px 0 0 0'};
`;

export default More;