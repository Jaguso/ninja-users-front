import { useNavigate } from 'react-router-dom';
import { Main, Title, Button } from './Navbar.styles';

function Navbar() {

  const navigate = useNavigate();

  return (
    <Main>
      <Title onClick={() => navigate('/')}>Ninja Users</Title>
      <Button onClick={() => navigate('/')}>Ver usuarios</Button>
    </Main>
  );
}

export default Navbar;