// Formatação de valores monetários
export const formatCurrency = (value) => {
  if (!value) return 'R$ 0,00';
  return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
};

// Validação de email (caso adicione login no futuro)
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validação de campos do produto
export const validateProduct = (product) => {
  const errors = {};
  
  if (!product.name || product.name.trim() === '') {
    errors.name = 'Nome é obrigatório';
  }
  
  if (!product.price || isNaN(product.price) || parseFloat(product.price) <= 0) {
    errors.price = 'Preço deve ser maior que 0';
  }
  
  if (!product.quantity || isNaN(product.quantity) || parseInt(product.quantity) < 0) {
    errors.quantity = 'Quantidade deve ser um número positivo';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Debounce para otimizar pesquisas (caso adicione busca)
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Capitalizar primeira letra
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};