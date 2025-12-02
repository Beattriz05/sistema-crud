import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Salvar item
  setItem: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error('Erro ao salvar no storage:', error);
      return false;
    }
  },

  // Buscar item
  getItem: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Erro ao buscar do storage:', error);
      return null;
    }
  },

  // Remover item
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Erro ao remover do storage:', error);
      return false;
    }
  },

  // Limpar tudo
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Erro ao limpar storage:', error);
      return false;
    }
  },
};

// Chaves para storage
export const STORAGE_KEYS = {
  PRODUCTS_CACHE: '@products_cache',
  USER_SETTINGS: '@user_settings',
  APP_THEME: '@app_theme',
};