import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Timeline } from '../time-line';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const Item = ({ item }) => {
  const navigation = useNavigation()

  const handleNavigation = (status, idOrder) => {
    navigation.navigate('Detalhes', { status, idOrder })
  }

  return (
    <View className="rounded bg-white mb-4">
      <View className="px-3 py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Image
              source={require("..//../imgs/Package.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-primary-gray2 font-bold text-2xl">{item?.name}</Text>
          </View>
          <Text className="text-primary-gray3 text-xs font-medium">{moment(item?.createdAt).format('DD/MM/YYYY')}</Text>
        </View>
        <View className="mt-8">
          <Timeline status={item?.status} />
          <View className="flex-row items-center justify-between pt-2">
            <Text className="text-xs font-bold text-primary-green">AGUARDANDO</Text>
            <Text className="text-xs font-bold text-primary-green pr-4">RETIRADO</Text>
            <Text className="text-xs font-bold text-primary-green">ENTREGUE</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => handleNavigation(item?.status, item?.id)}
        className="flex-row items-center justify-between px-3 py-3 mt-2 bg-primary-white2 rounded-b"
      >
        <Text className="font-medium text-base text-primary-gray2">Detalhes</Text>
        <Image
          source={require("..//../imgs/Seta.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  )
};

const FlatListComponent = ({ data }) => {
  return (
    <SafeAreaView className="mb-16">
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListComponent;