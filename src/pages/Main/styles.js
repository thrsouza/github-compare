import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: center;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 15px;
    margin-left: 10px;
    background: #6272a4;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #44475a;
    }
  }
`;
