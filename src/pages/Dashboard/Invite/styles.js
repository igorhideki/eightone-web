import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  > div + div {
    margin-top: 15px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 5px;
  color: ${colors.primary};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${colors.gray};
  margin-bottom: 15px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button + button {
    margin-left: 5px;
  }
`;
