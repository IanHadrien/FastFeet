import { Text, TextInput, View } from "react-native";

export function Input({ id, name, placeholder, onChangeText, value, error, disable, bgColor="bg-primary-white", label}) {
  return (
    <>
      <Text className="text-base text-primary-gray2">{label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} className={`relative border border-gray-200 rounded ${bgColor} ${disable && "border-gray-300"} ${error && "border-red-500"}`}>
        <TextInput
          id={id}
          name={name}
          className={`w-full py-3 px-4 rounded-lg text-base`}
          placeholder={placeholder}
          placeholderTextColor='#BEBCCC'
          value={value}
          onChangeText={onChangeText}
          editable={!disable}
        />
      </View>
      <Text className="text-red-500 text-xs">{error ? error[0] : ''}</Text>
    </>
  )
}
