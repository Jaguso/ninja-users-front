import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { createUser, getUserById, updateUser } from '../../services';
import { Main, Form, InputContainer, Label, Input, ButtonsContainer, Button, CancellButton } from './AddUser.styles';

function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState({
		street: "",
		city: "",
		country: "",
		postalcode: ""
	});

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state)
  useEffect(() => {
    if(!location.state?.createUser) {
      getUserById(location.state.id).then(response => {
        console.log('res', response)
        if (response.data.status === 'success') {
          const { user } = response.data;
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setEmail(user.email);
          setBirthDate(user.birthDate);
          setAddress({
            street: user.address.street,
            city: user.address.city,
            country: user.address.country,
            postalcode: user.address.postalcode
          });
        }
      })
    }
    return () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setBirthDate('');
      setAddress({
        street: "",
        city: "",
        country: "",
        postalcode: ""
      });
    }

  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({firstName, lastName, email, birthDate, address});
    if (validateEmptyFields()) {
      try {
        if (location.state?.createUser) {
          const response = await createUser({firstName, lastName, email, birthDate, address});
          if (response.data.status === 'success') {
            navigate('/');
          } else {
            alert('Ha ocurrido un error.')
          }
        } else {
          const response = await updateUser(location.state.id, {firstName, lastName, email, birthDate, address});
          if (response.data.status === 'success') {
            navigate('/');
          } else {
            alert('Ha ocurrido un error.')
          }
        }
      } catch (err) {
        alert('Ha ocurrido un error.')
      } 
    } else {
      return;
    }
  };

  const validateEmptyFields = () => {
    if (!firstName) {
      alert('El nombre no puede ser vacío.');
      return false;
    } else if (!lastName) {
      alert('El apellido no puede ser vacío.');
      return false;
    }
    else if (!email) {
      alert('El email no puede ser vacío.');
      return false;
    }
    else if (!birthDate) {
      alert('La fecha de nacimiento no puede ser vacía.');
      return false;
    }
    else if (!address.street) {
      alert('Se tiene que ingresar una calle.');
      return false;
    }
    else if (!address.city) {
      alert('Se tiene que ingresar una ciudad.');
      return false;
    }
    else if (!address.country) {
      alert('Se tiene que ingresar un pais.');
      return false;
    }
    else if (!address.postalcode) {
      alert('Se tiene que ingresar un código postal.');
      return false;
    } else {
      return true;
    }
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h3>Datos de usuario</h3>
        <InputContainer>
          <Label>Nombre:</Label><br></br>
          <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>Apellido:</Label><br></br>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>Email:</Label><br></br>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <Label>Fecha de nacimiento:</Label><br></br>
          <Input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        </InputContainer>
        <h3>Dirección</h3>
        <InputContainer>
          <Label>Calle:</Label><br></br>
          <Input type="text" value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})} />
        </InputContainer>
        <InputContainer>
          <Label>Ciudad:</Label><br></br>
          <Input type="text" value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} />
        </InputContainer>
        <InputContainer>
          <Label>País:</Label><br></br>
          <Input type="text" value={address.country} onChange={(e) => setAddress({...address, country: e.target.value})} />
        </InputContainer>
        <InputContainer>
          <Label>Código postal:</Label><br></br>
          <Input type="text" value={address.postalcode} onChange={(e) => setAddress({...address, postalcode: e.target.value})} />
        </InputContainer>
        <ButtonsContainer>
          <CancellButton onClick={() => navigate('/')}>Cancelar</CancellButton>
          <Button type="submit">{location.state?.createUser ? 'Agregar' : 'Guardar cambios'}</Button>
        </ButtonsContainer>
      </Form>
    </Main>
  );
}

export default AddUser;