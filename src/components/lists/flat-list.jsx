import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Timeline } from '../time-line';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => {
  const navigation = useNavigation()

  return (
    <View className="rounded bg-white mb-4">
      <View className="px-3 py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Image
              source={require("..//../imgs/Package.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text className="text-primary-gray2 font-bold text-2xl">Pacote 03</Text>
          </View>
          <Text className="text-primary-gray3 text-xs font-medium">01/07/2020</Text>
        </View>
        <View className="mt-8">
          <Timeline />
          <View className="flex-row items-center justify-between pt-2">
            <Text className="text-xs font-bold text-primary-green">AGUARDANDO</Text>
            <Text className="text-xs font-bold text-primary-green pr-4">RETIRADO</Text>
            <Text className="text-xs font-bold text-primary-green">ENTREGUE</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => (navigation.navigate('Detalhes'))}
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

const FlatListComponent = () => {
  return (
    <SafeAreaView className="mb-16">
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FlatListComponent;