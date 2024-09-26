import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ImagePickerComponent from '../../components/camera/expo-image';

export default function Confirm() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView className="bg-primary-white">
        <View className="flex-row items-center justify-between bg-primary-purple pb-6 px-6">
          <TouchableOpacity
            onPress={() => (navigation.navigate('Pendentes'))}
            className="py-1"
          >
            <Image
              source={require("../../imgs/Seta2.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <Text className="font-bold text-3xl text-white">
            Confirmar
          </Text>
          <Text />
        </View>

        <View className="pt-52">
          <ImagePickerComponent />
        </View>
      </ScrollView>

      {/* Botão fixado ao final */}
      <View className="px-6" style={{ padding: 16, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <TouchableOpacity
          onPress={() => console.log('Retirar')}
          style={{
            backgroundColor: '#FFC042',
            padding: 16,
            borderRadius: 4,
            alignItems: 'center',
          }}
        >
          <Text className="font-medium text-base text-primary-gray2">Enviar foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
