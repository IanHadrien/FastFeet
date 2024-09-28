import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { InputIconSearch } from '../../../components/inputs/inputIconSearch';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import RecipientsAPI from '../../../api/recipient-api';
import ListOrders from './partials/list-orders';
import OrdersAPI from '../../../api/order-api';

export default function Orders() {
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    loadRegister()
  }, [isFocused])

  const loadRegister = async () => {
    // setLoading(true);

    try {
      const res = await OrdersAPI.Get()

      setData(res?.data?.orders);
    } catch (e) {
      console.log("Erro:", e);
      // Toast.show({
      //   type: "error",
      //   text2: "Erro na busca!",
      // })
    } finally {
      // setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary-white">
      <View className="px-6">
        <View className="flex-row items-center justify-between pb-4 pt-2">
          <Text className="text-primary-gray2 text-2xl pt-2 font-bold">Encomendas</Text>
          <TouchableOpacity
            onPress={() => (navigation.navigate('CreateRecipient'))}
            // className="border-b py-2"
          >
            <Text className="text-3xl px-2 text-primary-gray2">+</Text>
          </TouchableOpacity>
        </View>

        <InputIconSearch
          onChangeText={setText}
          value={text}
          placeholder='Filtrar por encomendas'
          className={`border w-full p-2 rounded-lg ${text && "border-red-500"}`}
          bgColor='bg-white'
        />
      </View>

      <View className="border-t border-primary-gray px-6">
        <ListOrders data={data} />
      </View>
    </SafeAreaView>
  );
}
