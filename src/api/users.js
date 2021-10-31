import axios from 'axios';

export async function getUsers() {
  const { data } = await axios.get('/users');

  return data;
}

export async function updateUser(userData) {
  const { data } = await axios.put(userData._id, userData);

  return data;
}
