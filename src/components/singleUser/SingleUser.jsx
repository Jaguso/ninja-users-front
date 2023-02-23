import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ListItem, Text, ColumnData, ButtonsColumn, Button, TopContainer, BottomContainer, AddressData } from "./SingleUser.styles";

function SingleUser({user, handleDeleteUser}) {
  const [showAddress, setShowAddress] = useState(false);
  const navigate = useNavigate();

  return (
    <ListItem>
      <TopContainer>
        <ColumnData>
          <Text><strong>Nombre:</strong> {user.firstName}</Text>
          <Text><strong>Apellido:</strong> {user.lastName}</Text>
        </ColumnData>
        <ColumnData>
          <Text><strong>Email:</strong> {user.email}</Text>
          <Text><strong>Fecha de nacimiento:</strong> {user.birthDate}</Text>
        </ColumnData>
        <ButtonsColumn>
          <Button onClick={() => navigate('/add-user', {state: {createUser: false, id: user._id }})}>Editar</Button>
          <Button onClick={() => handleDeleteUser(user._id)}>Eliminar</Button>
          <Button onClick={() => setShowAddress(!showAddress)}>{showAddress ? 'Ocultar Dirección' : 'Ver dirección'}</Button>
        </ButtonsColumn>
      </TopContainer>

      {showAddress &&
        <BottomContainer>
          <h3>Dirección</h3>
          <AddressData>
            <Text><strong>Calle: </strong>{user.address.street}</Text>
            <Text><strong>Ciudad: </strong>{user.address.city}</Text>
            <Text><strong>Pais: </strong>{user.address.country}</Text>
            <Text><strong>Código postal: </strong>{user.address.postalcode}</Text>

          </AddressData>
        </BottomContainer>
      }
    </ListItem>
  );
}

export default SingleUser;