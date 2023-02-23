import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/addUser/AddUser';
import Users from './components/users/Users';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Users/>} /> 
        <Route exact path="/add-user" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
