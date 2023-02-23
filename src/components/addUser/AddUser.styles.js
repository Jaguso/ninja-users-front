import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`

export const Form = styled.form`
  margin: 50px 0;
  width: 600px;
  height: 650px;
  background-color: #cdd7e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content-center
`

export const InputContainer = styled.div`
  margin: 3px 0;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding-left: 5px;
  border-radius: 2px;
  border: hidden;
`

export const ButtonsContainer = styled.div`
  width: 300px;
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  border: hidden;
  color: white;
  border-radius: 3px;
  background-color: #0e2f44;
  height: 30px;
  width: 120px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
`

export const CancellButton = styled.button`
  border: #0e2f44 1px solid;
  color: #0e2f44;
  border-radius: 3px;
  background-color: #cdd7e5;
  height: 30px;
  width: 120px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
`
