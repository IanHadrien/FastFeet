import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation()

  return (
    <View className="rounded bg-white mb-4">
      <View className="px-3 py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Text className="text-primary-gray2 font-bold text-2xl">{item?.name}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => (navigation.navigate('EditUser', { id: item?.id}))}
        className="flex-row items-center justify-between px-3 py-3 bg-primary-white2 rounded-b"
      >
        <Text className="font-medium text-base text-primary-gray2">Detalhes</Text>
        <Image
          source={require("../../../../imgs/Seta.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  )
};

const ListUsers = ({ data }) => {
  return (
    <SafeAreaView className="mb-16 mt-4">
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ListUsers;