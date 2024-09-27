import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { InputIconSearch } from '../../../components/inputs/inputIconSearch';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import UsersAPI from '../../../api/users-api';
import ListUsers from './partials/list-users';

export default function Users() {
  const [text, setText] = useState('')
  const [usersData, setUsers] = useState([])
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    loadRegister()
  }, [isFocused])

  const loadRegister = async () => {
    // setLoading(true);

    try {
      const res = await UsersAPI.Get()
      console.log("Resre: ", res?.data?.users)

      setUsers(res?.data?.users);
    } catch (e) {
      console.log("Erro:", e);
      // Toast.show({
      //   type: "error",
      //   text2: "Erro na busca!",
      // })
    } finally {
      // setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary-white">
      <View className="px-6">
        <View className="flex-row items-center justify-between pb-4 pt-2">
          <Text className="text-primary-gray2 text-2xl pt-2 font-bold">Usuários</Text>
          <TouchableOpacity
            onPress={() => (navigation.navigate('CreateUser'))}
            // className="border-b py-2"
          >
            <Text className="text-3xl px-2 text-primary-gray2">+</Text>
          </TouchableOpacity>
        </View>

        <InputIconSearch
          onChangeText={setText}
          value={text}
          placeholder='Filtrar por usuário'
          className={`border w-full p-2 rounded-lg ${text && "border-red-500"}`}
          bgColor='bg-white'
        />
      </View>

      <View className="border-t border-primary-gray px-6">
        <ListUsers data={usersData} />
      </View>
    </SafeAreaView>
  );
}
