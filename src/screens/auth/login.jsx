import React, { useState } from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { InputIcon } from '../../components/inputs/inputIcon';
import { InputIconText } from '../../components/inputs/inputIconText';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import UsersAPI from '../../api/users-api';

export default function Login() {
  const { signIn } = useAuth()
  const navigation = useNavigation()
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {

    const regTemp = { cpf, password }
    // setIsLoading(true)
    try {
      // clearErrors();
      const dataRes = await UsersAPI.Login(regTemp);
      await signIn(dataRes?.data);
      // setIsLoading(false);
    } catch (error) {
      Toast.show({
        type: 'error',
        text2: 'Erro ao realizar login.',
      });

      setIsLoading(false)
    }
  }

  return (
    <ScrollView className="bg-primary-purple pt-2 px-6">
      <View>
        <View className="flex-row items-center justify-between py-20">
          <Image
            source={require("../../imgs/Logotipo.png")}
            style={{ width: 40, height: 44 }}
          />
          <Image
            source={require("../../imgs/Logo.png")}
            style={{ width: 123, height: 24 }}
          />
        </View>
      </View>
      <View className="space-y-4">
        <View>
          <Text className="text-primary-yellow italic text-5xl font-bold">Entregador,</Text>
          <Text className="text-primary-white italic text-5xl font-bold">você é nosso</Text>
          <Text className="text-primary-white italic text-5xl font-bold">maior valor</Text>
        </View>
        <View>
          <Text className="text-primary-purple2 text-base">Faça seu login para</Text>
          <Text className="text-primary-purple2 text-base">começar suas entregas</Text>
        </View>
      </View>
      <View className=" pt-14">
        {/* <Text */}
        <InputIconText 
          onChangeText={setCpf}
          value={cpf}
          placeholder='CPF'
        />
        <InputIcon 
           onChangeText={setPassword}
           value={password}
           placeholder='Senha'
           className={`border w-full p-2 rounded-lg ${password && "border-red-500"}`}
        />

        <View className="flex-row items-center justify-between mt-1">
          <View></View>
          <TouchableOpacity
            onPress={() => (navigation.navigate('forgot-password'))}
          >
            <Text className="text-primary-purple2 font-light">Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-primary-yellow py-4 rounded mt-4"
        >
          <Text className="text-primary-purple font-medium text-base text-center">
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}
