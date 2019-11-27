import styled, { css } from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  border-radius: 8px;
  padding: 15px;
  background: ${colors.lightGray};

  ${prop =>
    prop.elevated &&
    css`
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    `}
`;
