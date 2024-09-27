import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api";

export const AuthContext = createContext({ siged: true })

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    loadStoragedData();
  }, []);

  const loadStoragedData = async () => {
    setLoading(true)
    try {
      const storageToken = await AsyncStorage.getItem('@RNAuth:token')

      if (storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setToken(storageToken);
      }
    } catch (error) {
      // showToast(error, 'Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  };

  const signIn = async (data) => {
    setLoading(true)
    try {
      await AsyncStorage.setItem('@RNAuth:token', data?.access_token)

      api.defaults.headers.Authorization = `Bearer ${data?.access_token}`;
      setToken(data?.access_token)
    } catch (error) {
      // showToast(error, 'Erro ao realizar login')
    } finally {
      setLoading(false)
    }
  };

  const signOut = async () => {
    AsyncStorage.clear()
    AsyncStorage.clear().then(() => {
      token && setToken(null);
      api.defaults.headers.Authorization = '';
    });
  };

  return (
    <AuthContext.Provider value={{
      signed: !!token,
      signIn, signOut, loading
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  const context = useContext(AuthContext)

  return context
};