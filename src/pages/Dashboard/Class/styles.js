import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Info = styled.div`
  margin-left: 15px;
  font-size: 16px;
  color: ${colors.primary};

  > p:last-child {
    color: ${darken(0.1, colors.secondary)};
  }
`;
