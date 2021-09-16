import styled from 'styled-components';

const MainDiv = styled.div`
  @media (max-width: 1082px) {
    margin-left: 260px;
  }
  margin-left: 20vw;
  position: relative;
`;

const H1 = styled.h1`
  margin: 32px 0 64px 0;
  font-size: 32px;
  font-family: Montserrat Alternates, sans-serif;
`;

const H2 = styled.h1`
  margin: 0 0 48px 0;
  font-size: 24px;
  font-family: Montserrat Alternates, sans-serif;
`;

const H3 = styled.h1`
  margin: 0 0 36px 0;
  font-size: 20px;
  font-family: Montserrat Alternates, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  margin-bottom: 32px;
`;

export {H1, H2, H3, Section, Article, MainDiv};