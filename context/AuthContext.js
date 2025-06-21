import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
        // Opcional: restaurar sessão
        const refresh_token = await AsyncStorage.getItem('refresh_token');
        if (refresh_token) {
          await supabase.auth.setSession({ access_token: token, refresh_token });
        }
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  const login = async (token, refresh_token) => {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
    await supabase.auth.setSession({ access_token: token, refresh_token });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refresh_token');
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
