import styled from 'styled-components';

export const Main = styled.nav`
  height: 8vh;
  min-height: 50px;
  max-height: 80px;
  padding: 0 50px;
  background-color: #0e2f44;
  display: flex;
  justify-content: space-between;
  align-items: center
`;

export const Title = styled.h2`
  color: white;
  cursor: pointer;
`;

export const Button = styled.button`
  border: white 1px solid;
  color: white;
  border-radius: 3px;
  background-color: #0e2f44;
  height: 30px;
  width: 120px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
`