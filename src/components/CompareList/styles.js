import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 10px;
  margin: 0 10px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;

  color: #282a36;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 22px;
      margin-top: 10px;
      text-transform: uppercase;
    }

    small {
      font-size: 14px;
      color: #666;
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f8f8f2;
      }
    }
  }

  .buttons-container {
    padding: 10px;

    button {
      width: 100%;
      padding: 10px;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      border: 0;
      border-radius: 5px;

      &.update {
        background: #6272a4;
        margin-bottom: 5px;
      }

      &.remove {
        background: #ff5555;
      }

      &:hover {
        background: #44475a;
      }
    }
  }
`;
