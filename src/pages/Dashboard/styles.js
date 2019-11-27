import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  display: flex;

  aside {
    width: 260px;
    margin-right: 30px;
  }

  main {
    width: 100%;

    > div + div {
      margin-top: 15px;
    }
  }
`;

export const TitleCard = styled.h3`
  margin-bottom: 15px;
`;
