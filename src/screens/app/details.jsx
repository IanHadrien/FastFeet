import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import OrdersAPI from '../../api/order-api';
import moment from 'moment';
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function Details({ route }) {
  const { status } = route.params
  const { idOrder } = route.params

  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [data, setData] = useState([])

  useEffect(() => {
    loadRegister()
  }, [isFocused])

  const loadRegister = async () => {
    // setLoading(true);

    try {
      const res = await OrdersAPI.GetOne(idOrder)
      console.log("teste: ", res?.data?.order)

      setData(res?.data?.order);
    } catch (e) {
      console.log("Erro:", e);
      // Toast.show({
      //   type: "error",
      //   text2: "Erro na busca!",
      // })
    } finally {
      // setLoading(false);
    }
  }

  const handleConfirm = async () => {
    if (status === "Aguardando") {
      try {
        await OrdersAPI.MarkPickupOrder(idOrder);
  
        Toast.show({
          type: "success",
          text2: "Situação atualizada com sucesso.",
        });
        
        navigation.navigate('Pendentes')
      } catch (error) {
        console.log(error)
        Toast.show({
          type: "error",
          text2: "Erro ao atualizar situação.",
        });
      }
    } else  {
      navigation.navigate('Confirmar', { idOrder })
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView className="bg-primary-white">
        <View className="flex-row items-center justify-between bg-primary-purple pb-12 px-6">
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
            Detalhes
          </Text>
          <Text />
        </View>

        <View className="px-6">
          <View className="bg-white rounded px-3 py-5 -mt-6"> 
            <View className="flex-row items-center space-x-3">
              <Image
                source={require("../../imgs/Vector.png")}
                style={{ width: 18, height: 20 }}
              />
              <Text className="font-bold text-2xl">Dados</Text>
            </View>
            <View className="mt-5">
              <Text className="text-primary-gray2 font-bold text-xs">DESTINATÁRIO</Text>
              <Text className="text-primary-gray3 text-base mt-1 mb-4">{data?.recipient?.name}</Text>
              <Text className="text-primary-gray2 font-bold text-xs">ENDEREÇO</Text>
              <Text className="text-primary-gray3 text-base mt-1 mb-4 mr-16">{data?.recipient?.address}</Text>
            </View>
          </View>

          <View className="bg-white rounded px-3 py-5 mt-4"> 
            <View className="flex-row items-center space-x-3">
              <Image
                source={require("../../imgs/Vector2.png")}
                style={{ width: 18, height: 20 }}
              />
              <Text className="font-bold text-2xl">Situação</Text>
            </View>
            <View className="mt-5 flex-row items-center justify-between">
              <View>
                <Text className="text-primary-gray2 font-bold text-xs">STATUS</Text>
                <Text className="text-primary-gray3 text-base mt-1 mb-4">{data?.status}</Text>
              </View>
              <View className="mr-16">
                <Text className="text-primary-gray2 font-bold text-xs">POSTADO EM</Text>
                <Text className="text-primary-gray3 text-base mt-1 mb-4">{moment(data?.createdAt).format('DD/MM/YYYY')}</Text>
              </View>
            </View>
            <View className="mt-2 flex-row items-center justify-between">
              <View>
                <Text className="text-primary-gray2 font-bold text-xs">DATA DE RETIRADA</Text>
                <Text className="text-primary-gray3 text-base mt-1 mb-4">
                  {
                    data?.returnDate ? moment(data?.returnDate).format('DD/MM/YYYY') : "--/--/----"
                  }
                </Text>
              </View>
              <View className="mr-12">
                <Text className="text-primary-gray2 font-bold text-xs">DATA DE ENTREGA</Text>
                <Text className="text-primary-gray3 text-base mt-1 mb-4">
                  {
                    data?.deliveryDate ? moment(data?.deliveryDate).format('DD/MM/YYYY') : "--/--/----"
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View className="px-6">
          <TouchableOpacity
            onPress={() => console.log('Retirar')}
            className="border"
          >
            <Text>Retirar pacote</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* Botão fixado ao final */}
      <View className="px-6" style={{ padding: 16, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <TouchableOpacity
          onPress={handleConfirm}
          style={{
            backgroundColor: '#FFC042',
            padding: 16,
            borderRadius: 4,
            alignItems: 'center',
          }}
        >
          <Text className="font-medium text-base text-primary-gray2">
            {status === "Aguardando" ? "Retirar pacote" : "Confirmar entrega"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
