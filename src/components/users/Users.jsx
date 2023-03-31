import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../../services";
import SingleUser from "../singleUser/SingleUser";
import Loading from '../loading/Loading';
import { Main, UsersList, Header, NoUsers } from "./Users.styles";
import { Button } from '@mui/material';


function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then(response => {
      if (response.data.status === 'success') {
        setUsers(response.data.users)
        setIsLoading(false);
      } else {
        alert('Ha ocurrido un error.')
        setIsLoading(false);
      }
    }).catch(err => {
      alert('Ha ocurrido un error.')
      setIsLoading(false);
    })
  }, []);

  const handleDeleteUser = async(id) => {
    setIsLoading(true);
    try {
      const res = await deleteUser(id);
      if (res.status === 204) {
        const updatedUsers = users.filter(user => user._id !== id);
        setUsers(updatedUsers)
        setIsLoading(false)
      } else {
        alert('Ha ocurrido un error.')
        setIsLoading(false)
      }
    } catch(err) {
      alert('Ha ocurrido un error.')
      setIsLoading(false)
    }
  }

  if (isLoading) return <Loading/>
  
  return (
    <Main>
      <UsersList>
        <Header>
          <Button 
            onClick={() => navigate('/add-user', {state: {createUser: true }})}
            variant="contained"
            color="primary"
          >
            Crear usuario
          </Button>
        </Header>
        {users.length === 0 ? 
          <NoUsers>
            <h2>No se han creado usuarios todavía.</h2> 
          </NoUsers> :
          users.map(user => (
          <SingleUser
            key={user._id}
            user={user}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </UsersList>
    </Main>
  );
}

export default Users;