import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px 0;
`;

export const Name = styled.span`
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const Role = styled.span`
  color: ${colors.gray};
`;
