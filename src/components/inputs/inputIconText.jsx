import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

export function InputIconText({ id, name, placeholder, onChangeText, value, error, disable}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} className={`border border-transparent rounded bg-primary-white ${disable && "border-gray-300"} ${error && "border-red-500"}`}>
        <TouchableOpacity className="border-r border-primary-gray px-4" onPress={togglePasswordVisibility}>
          <IconFeather name='user' size={24} color='#FFC042' />
        </TouchableOpacity>
        <TextInput
          id={id}
          name={name}
          className={`w-full py-3 px-4 rounded-r text-base`}
          placeholder={placeholder}
          placeholderTextColor='#BEBCCC'
          // secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
          editable={!disable}
        />
      </View>
      <Text className="text-red-500 text-xs">{error ? error[0] : ''}</Text>
    </>
  )
}
