import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Button = styled.button`
  background: ${props => {
    if (props.secondary) {
      return colors.secondary;
    }
    if (props.danger) {
      return colors.danger;
    }
    return colors.primary;
  }};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  padding: 0 15px;
  border-radius: 4px;
  transition: background 0.2s;
  border: 0;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => {
      if (props.secondary) {
        return darken(0.08, colors.secondary);
      }
      if (props.danger) {
        return darken(0.03, colors.danger);
      }
      return darken(0.03, colors.primary);
    }};
  }

  > svg {
    margin-right: 6px;
  }
`;
