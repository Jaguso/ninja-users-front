import axios from 'axios';

const URL = 'https://ninja-users-backend.herokuapp.com/api';

const getAllUsers = () => axios.get(`${URL}/users`);

const createUser = (data) => axios.post(`${URL}/users`, data);

const getUserById = (id) => axios.get(`${URL}/users/${id}`);

const updateUser = (id, data) => axios.put(`${URL}/users/${id}`, data);

const deleteUser = (id) => axios.delete(`${URL}/users/${id}`);

export { 
  getAllUsers, 
  createUser, 
  getUserById, 
  updateUser,
  deleteUser 
};