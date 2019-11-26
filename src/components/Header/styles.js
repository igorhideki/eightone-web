import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.primary}
    }
  }

  aside {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      margin-right: 15px;

      li {
        margin: 0 15px;

        a {
          color: ${colors.darkGray};
          font-weight: bold;
          transition: color 0.2s;

          &:hover {
            color: ${colors.gray}
          }
        }
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 30px;

  strong {
    display: block;
    color: ${colors.darKgray};
  }

  a {
    display: block;
    margin-top: 4px;
    color: ${colors.gray};
  }
`;
