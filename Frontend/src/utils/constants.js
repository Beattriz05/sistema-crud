// Configurações da API
export const API_CONFIG = {
  // IMPORTANTE: Substituir pelo IP da sua máquina
  BASE_URL: 'http://192.168.1.100:3000/api',
  TIMEOUT: 10000,
};

// Cores do app
export const COLORS = {
  PRIMARY: '#2196F3',
  SECONDARY: '#4CAF50',
  DANGER: '#F44336',
  WARNING: '#FF9800',
  INFO: '#00BCD4',
  LIGHT: '#F5F5F5',
  DARK: '#333333',
  GRAY: '#757575',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

// Tamanhos e espaçamentos
export const SIZES = {
  PADDING: 16,
  MARGIN: 16,
  RADIUS: 8,
  ICON: 24,
};

// Mensagens de validação
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Este campo é obrigatório',
  INVALID_PRICE: 'Preço inválido',
  INVALID_QUANTITY: 'Quantidade inválida',
  MIN_PRICE: 'O preço deve ser maior que 0',
  MIN_QUANTITY: 'A quantidade deve ser maior que 0',
};

// Mensagens de erro da API
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
  SERVER_ERROR: 'Erro no servidor. Tente novamente mais tarde.',
  NOT_FOUND: 'Recurso não encontrado.',
  UNAUTHORIZED: 'Acesso não autorizado.',
};