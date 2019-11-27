import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;

  h2 {
    color: ${colors.darkGray};
  }

  h3 {
    color: ${colors.gray};
    font-weight: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 75px;

  span {
    margin-left: 5px;
  }
`;

export const Status = styled.div`
  padding: 5px 15px;
  background: ${prop => (prop.active ? colors.secondary : colors.danger)};
  color: #fff;
  margin-left: auto;
  font-size: 12px;
  border-radius: 14px;
  font-weight: bold;
  height: 28px;
`;

export const Footer = styled.footer`
  margin-top: 30px;
`;
