import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFeather from 'react-native-vector-icons/Feather';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { InputIconSearch } from '../components/inputs/inputIconSearch';
import { useAuth } from "../contexts/auth";

export function CustomHeader({ title }) {
  const { signOut } = useAuth();
  const [text, setText] = useState('')

  return (
    <>
      {(title === 'Detalhes' || title === 'Confirmar')
        ?
          <View style={[styles.header]} className="pt-10">
            <Text></Text>
          </View>
        :
          <View style={[styles.header]} className="pt-10">
            {/* {backRoute && <ButtonNavigateBack />} */}
            <View className="flex-row items-center justify-between pb-6 px-6">
              <View>
                <Text className="text-primary-purple2 text-base">Bem vindo,</Text>
                <Text className="text-primary-purple2 text-base">Test User</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => signOut()}>
                  <IconFeather name='log-out' size={24} color='#FFC042' />
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row items-center justify-between px-6 pb-14">
              <Text className="text-white font-bold text-4xl">
                Entregas
              </Text>
              <View className="flex-row items-center">
                <IconEvilIcons name='location' size={24} color='#FFC042' />
                <Text className="text-primary-purple2 text-base">São Paulo</Text>
              </View>
            </View>

            <View className="bg-primary-white">
              <View className="px-6 -mt-7">
                <InputIconSearch
                  onChangeText={setText}
                  value={text}
                  placeholder='Filtrar por entregas'
                  className={`border w-full p-2 rounded-lg ${text && "border-red-500"}`}
                />
              </View>
            </View>
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4C33CC',
  },
});
