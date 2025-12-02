import axios from 'axios';

// Configure sua URL base do backend
const API_URL = 'http://SEU_IP_LOCAL:3000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Interceptor para logging (opcional)
api.interceptors.request.use(
  config => {
    console.log('Request:', config.method, config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const productService = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  create: (product) => api.post('/products', product),
  update: (id, product) => api.put(`/products/${id}`, product),
  delete: (id) => api.delete(`/products/${id}`),
};

export default api;