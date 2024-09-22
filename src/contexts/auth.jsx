import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext({ siged: true })

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(null)
  const [token, setToken] = useState(null)
  const [dataUser, setDataUser] = useState({})

  useEffect(() => {
    loadStoragedData();
  }, []);

  const loadStoragedData = async () => {
    setLoading(true)
    try {
      const storageToken = await AsyncStorage.getItem('@RNAuth:token')
      const storageUser = await AsyncStorage.getItem('user')

      // if (storageToken) {
      //   api.defaults.headers.Authorization = `Bearer ${storageToken}`;

        const objUser = JSON.parse(storageUser);
        setDataUser(objUser);
        setToken(storageToken);
      // }
    } catch (error) {
      // showToast(error, 'Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  };

  const signIn = async (data) => {
    const { user } = data
    console.log(user)
    // user.roles = data?.roles || ['client'];

    setLoading(true)
    try {
      await AsyncStorage.setItem('@RNAuth:token', data.token)
      await AsyncStorage.setItem("user", JSON.stringify(user))

      setDataUser(user)
      // api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setToken(data.token)
    } catch (error) {
      // showToast(error, 'Erro ao realizar login')
    } finally {
      setLoading(false)
    }
  };

  const signOut = async (errorMessage = '') => {
    console.log('Logout')
    // try {
    //   setInsetsTop(0);
    //   await api.post("/logout");
    //   if (errorMessage) await showToast(null, 'Sistema disponível apenas em horário de trabalho.')
    // } catch (error) {

    // } finally {
    //   AsyncStorage.clear().then(() => {
    //     token && setToken(null);
    //     twoFactorType && setTwoFactorVerified(null);
    //     emailVerified && setEmailVerified(false);
    //     phoneVerified && setPhoneVerified(false);
    //     dataUser && setDataUser(null)
    //     api.defaults.headers.Authorization = '';
    //   });
    // }
  };


  // const showToast = (error, message) => {
  //   Toast.show({
  //     type: 'error',
  //     text2: error?.response?.data?.message || message,
  //   });
  // }

  return (
    <AuthContext.Provider value={{
      signed: !!token,
      signIn, signOut, loading,
      user: dataUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  const context = useContext(AuthContext)

  return context
};