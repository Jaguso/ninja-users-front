import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUser } from "../../services";
import SingleUser from "../singleUser/SingleUser";
import Loading from '../loading/Loading';
import { Main, UsersList, Header, Button, NoUsers } from "./Users.styles";

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
    try {
      const res = await deleteUser(id);
      if (res.status === 204) {
        const updatedUsers = users.filter(user => user._id !== id);
        setUsers(updatedUsers)
      } else {
        alert('Ha ocurrido un error.')
      }
    } catch(err) {
      alert('Ha ocurrido un error.')
    }
  }


  return (
    <Main>
      {isLoading ? <Loading/> :
        <UsersList>
          <Header>
            <Button onClick={() => navigate('/add-user', {state: {createUser: true }})}>Crear usuario</Button>
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
      
      }
    </Main>
  );
}

export default Users;