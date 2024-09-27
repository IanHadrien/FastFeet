import { Text, View } from "react-native"

export function CustomHeaderCreate() {
  return (
    <View className="bg-primary-purple pb-6 px-6 pt-10">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-3xl text-white text-center w-full">
          Cadastros
        </Text>
      </View>
    </View>
  );
}
