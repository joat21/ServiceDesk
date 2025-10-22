import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://2f19a16913d49d8a.mokky.dev',
  withCredentials: true,
});
