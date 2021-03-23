import axios from 'axios';

// https://api.hgbrasil.com/weather?key=e96474ca&lat=-23.682&lon=-46.875&user_ip=remote

export const key = 'b7386740';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;