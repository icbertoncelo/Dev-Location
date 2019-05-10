import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 40%;
  top: 40%;
  width: 20%;
  height: 22%;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    text-align: center;
    padding: 10px;
    font-size: 18px;
  }

  input {
    display: flex;
    flex: 1;
    max-height: 22%;
    margin-left: 10px;
    margin-right: 10px;
    background: #fff;
    font-size: 18px;
    box-shadow: 0 0 3px #000;
    border-radius: 3px;
    text-align: center;
  }

  div.add-user-actions {
    display: flex;
    padding: 5px;

    button {
      flex: 1;
      justify-content: center;
      border-radius: 3px;
      padding: 10px;
      margin: 5px;
      font-weight: bold;
      color: #fff;
      font-size: 12px;

      &:nth-child(2n) {
        color: #fff;
        background: #2e8b57;

        &:hover {
          background: #246b43;
          color: #fff;
        }
      }

      &:nth-child(2n - 1) {
        color: #fff;
        background: #ccc;

        &:hover {
          background: #999999;
          color: #fff;
        }
      }
    }
  }
`;
