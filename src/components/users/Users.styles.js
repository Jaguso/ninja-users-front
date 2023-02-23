import styled from 'styled-components';

export const Main = styled.div`

  // width: 100vw;
  // height: 100vh;
  display: flex;
  justify-content: center;
  // flex-direction: column;
  overfow-y: scroll;
`

export const UsersList = styled.div`
  width: 70%;
  max-width: 1000px;
  min-width: 600px;
  margin: 100px 0;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
export const Button = styled.button`
  border: hidden;
  color: white;
  border-radius: 3px;
  background-color: #0e2f44;
  height: 35px;
  width: 130px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
`

export const NoUsers = styled.div`
  display: flex;
  justify-content: center;
`