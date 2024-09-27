import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function IndexCreate() {
  const navigation = useNavigation()

  return (
    <ScrollView className="bg-primary-white px-6">
      <View className="space-y-5 mt-4">
        <TouchableOpacity
          onPress={() => (navigation.navigate('Users'))}
          className="border-b py-2"
        >
          <Text className="font-medium text-4xl text-primary-gray2">Usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Orders'))}
          className="border-b py-2"
        >
          <Text className="font-medium text-4xl text-primary-gray2">Encomendas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Recipients'))}
          className="border-b py-2"
        >
          <Text className="font-medium text-4xl text-primary-gray2">Destinatários</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
