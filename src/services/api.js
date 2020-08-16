import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.conviso.com.br/',
});

export default api;
