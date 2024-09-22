import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();

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
          <Text className="text-primary-yellow italic text-5xl font-bold">Esqueceu,</Text>
          <Text className="text-primary-white italic text-5xl font-bold">sua senha?</Text>
        </View>
        <View>
          <Text className="text-primary-purple2 text-base">Por motivos de segurança,</Text>
          <Text className="text-primary-purple2 text-base">para recuperá-la, vá até a central</Text>
          <Text className="text-primary-purple2 text-base">da distribuidora Fastfeet.</Text>
        </View>
      </View>
      <View className=" pt-14">
        <View>
          <Text className="text-white text-xs pb-2">ENDEREÇO</Text>
          <Text className="text-primary-purple2 text-base">Rua Guilherme Gemballa, 260</Text>
          <Text className="text-primary-purple2 text-base">Jardim América, SC</Text>
          <Text className="text-primary-purple2 text-base">89 168-000</Text>
        </View>

        <View className="flex-row items-center justify-between mt-16">
          <TouchableOpacity 
            onPress={() => (navigation.navigate('login'))} 
            className="p-1"
          >
            <Image
              source={require("../../imgs/Line.png")}
              style={{ width: 80 }}
            />
          </TouchableOpacity>
          <View>
            <Text className="text-white font-medium text-base">Voltar para o login</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
