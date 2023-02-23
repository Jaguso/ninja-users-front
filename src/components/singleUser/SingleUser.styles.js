import styled from 'styled-components';

export const ListItem = styled.div`
  border: gray 1px solid;
  width: 100%;
  height: auto;
  margin: 15px 0;
  padding: 5% 0;
  border-radius: 10px;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const BottomContainer = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ColumnData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;

`

export const ButtonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 30%;
  height: 100%;
`

export const AddressData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  border: #0e2f44 1px solid;
  color: #0e2f44;
  border-radius: 3px;
  background-color: white;
  height: 25px;
  width: 120px;
  margin: 3px 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
`

export const Text = styled.span`

`