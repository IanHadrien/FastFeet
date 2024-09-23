import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import IconFontisto from 'react-native-vector-icons/Fontisto';

export function InputIconSearch({ id, name, placeholder, onChangeText, value, error, disable}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} className={`relative border border-gray-200 rounded bg-primary-white ${disable && "border-gray-300"} ${error && "border-red-500"}`}>
        <TextInput
          id={id}
          name={name}
          className={`w-full py-3 px-4 rounded-lg text-base`}
          placeholder={placeholder}
          placeholderTextColor='#BEBCCC'
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
          editable={!disable}
        />
        <TouchableOpacity className="absolute right-4 top-4" onPress={togglePasswordVisibility}>
          <IconFontisto name='search' size={20} color='#BEBCCC' />
        </TouchableOpacity>
      </View>
      <Text className="text-red-500 text-xs">{error ? error[0] : ''}</Text>
    </>
  )
}
