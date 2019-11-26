import styled from 'styled-components';

export const FormWrapper = styled.div`
  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      padding: 0 20px;
    }

    textarea {
      padding: 14px 20px;
      resize: none;
    }

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:disabled {
        background: rgba(255, 255, 255, 0.1);
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    span {
      display: block;
      margin-bottom: 10px;
      align-self: flex-start;
      color: #fb6f91;
      font-weight: bold;
      line-height: 1;
    }

    > button {
      margin-top: 20px;
      margin-left: auto;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0;
    }
  }
`;
