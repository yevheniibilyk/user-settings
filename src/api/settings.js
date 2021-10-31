import axios from './axios'

export async function getSettings() {
  const { data } = await axios.get('/settings');

  return data;
}
