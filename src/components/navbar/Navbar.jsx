import { useNavigate } from 'react-router-dom';
import { Main, Title } from './Navbar.styles';
import { Button } from '@mui/material';

function Navbar() {

  const navigate = useNavigate();

  return (
    <Main>
      <Title onClick={() => navigate('/')}>Ninja Users</Title>
      <Button onClick={() => navigate('/')} variant="outlined" color="secondary">Ver usuarios</Button>
    </Main>
  );
}

export default Navbar;